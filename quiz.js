// Use vocabulary from the database
const vocabulary = vocabularyDatabase.getAllVocabulary();

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let currentMode = 'en-to-geo';
let answerType = 'multiple';
let totalQuestions = 10;
let hasAnswered = false;
let selectedAnswer = null;
let selectedCategory = 'all';

// Initialize category dropdown on page load
document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('categorySelect');
    const categories = vocabularyDatabase.getCategoryList();
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category + ' (' + vocabularyDatabase.getByCategory(category).length + ' words)';
        categorySelect.appendChild(option);
    });
    
    // Add statistics to the start screen
    const stats = vocabularyDatabase.getStatistics();
    const statsDiv = document.createElement('div');
    statsDiv.style.cssText = 'margin: 20px 0; color: #666; font-size: 0.9em;';
    statsDiv.innerHTML = `Total vocabulary: <strong>${stats.totalWords}</strong> words across <strong>${Object.keys(stats.categoryCounts).length}</strong> categories`;
    
    const startScreen = document.querySelector('.start-screen p');
    startScreen.appendChild(statsDiv);
});

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function normalizeAnswer(answer) {
    // Remove extra spaces, convert to lowercase, and remove punctuation
    return answer.trim().toLowerCase().replace(/[.,;!?]/g, '');
}

function checkAnswerSimilarity(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Check for exact match
    if (normalizedUser === normalizedCorrect) return true;
    
    // Check if answer contains the key parts (for Georgian answers with multiple options)
    const correctParts = normalizedCorrect.split(/[,/]/).map(p => p.trim());
    for (let part of correctParts) {
        if (part && normalizedUser.includes(part)) return true;
    }
    
    // Check if user answer is contained in correct answer (for partial matches)
    if (normalizedCorrect.includes(normalizedUser) && normalizedUser.length > 3) return true;
    
    return false;
}

function generateWrongAnswers(correctItem, isGeorgian, category) {
    const wrongAnswers = [];
    // Try to get wrong answers from the same category first
    let pool = category !== 'all' ? vocabularyDatabase.getByCategory(category) : vocabulary;
    
    // If not enough in category, use all vocabulary
    if (pool.length < 4) {
        pool = vocabulary;
    }
    
    const availableAnswers = pool.filter(v => v !== correctItem);
    const shuffled = shuffleArray(availableAnswers);
    
    for (let i = 0; i < 3 && i < shuffled.length; i++) {
        if (isGeorgian) {
            wrongAnswers.push(shuffled[i].georgian);
        } else {
            wrongAnswers.push(shuffled[i].word);
        }
    }
    
    return wrongAnswers;
}

function startQuiz() {
    // Get selected options
    currentMode = document.querySelector('input[name="mode"]:checked').value;
    answerType = document.querySelector('input[name="answerType"]:checked').value;
    selectedCategory = document.getElementById('categorySelect').value;
    
    // Get vocabulary pool based on category
    const vocabPool = selectedCategory === 'all' 
        ? vocabulary 
        : vocabularyDatabase.getByCategory(selectedCategory);
    
    totalQuestions = Math.min(parseInt(document.getElementById('questionCount').value), vocabPool.length);
    
    // Select random questions from the pool
    selectedQuestions = shuffleArray(vocabPool).slice(0, totalQuestions);
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;
    selectedAnswer = null;
    
    // Show quiz screen
    document.querySelector('.start-screen').classList.remove('active');
    document.querySelector('.quiz-screen').classList.add('active');
    
    // Update total questions display
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Show/hide appropriate answer input
    if (answerType === 'multiple') {
        document.getElementById('answerOptions').style.display = 'grid';
        document.getElementById('answerInput').style.display = 'none';
    } else {
        document.getElementById('answerOptions').style.display = 'none';
        document.getElementById('answerInput').style.display = 'block';
    }
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        showResults();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    const questionEl = document.getElementById('questionText');
    const answerInput = document.getElementById('answerInput');
    const answerOptions = document.getElementById('answerOptions');
    
    // Clear previous state
    answerInput.value = '';
    answerInput.className = 'answer-input';
    answerInput.disabled = false;
    answerOptions.innerHTML = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('checkBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    hasAnswered = false;
    selectedAnswer = null;
    
    // Determine question based on mode
    let questionText = '';
    let correctAnswer = '';
    let isGeorgianAnswer = false;
    
    if (currentMode === 'en-to-geo') {
        questionText = `<strong>${question.word}</strong><br><small style="color: #666; margin-top: 10px; display: block;">${question.definition}</small>`;
        answerInput.placeholder = 'Type Georgian translation...';
        correctAnswer = question.georgian;
        isGeorgianAnswer = true;
    } else if (currentMode === 'geo-to-en') {
        questionText = `<strong>${question.georgian}</strong>`;
        answerInput.placeholder = 'Type English word or phrase...';
        correctAnswer = question.word;
        isGeorgianAnswer = false;
    } else { // mixed mode
        if (Math.random() > 0.5) {
            questionText = `<strong>${question.word}</strong><br><small style="color: #666; margin-top: 10px; display: block;">${question.definition}</small>`;
            answerInput.placeholder = 'Type Georgian translation...';
            correctAnswer = question.georgian;
            isGeorgianAnswer = true;
            question.expectedAnswer = 'georgian';
        } else {
            questionText = `<strong>${question.georgian}</strong>`;
            answerInput.placeholder = 'Type English word or phrase...';
            correctAnswer = question.word;
            isGeorgianAnswer = false;
            question.expectedAnswer = 'english';
        }
    }
    
    questionEl.innerHTML = questionText;
    
    // Set up multiple choice options if needed
    if (answerType === 'multiple') {
        const wrongAnswers = generateWrongAnswers(question, isGeorgianAnswer, selectedCategory);
        const allAnswers = shuffleArray([correctAnswer, ...wrongAnswers]);
        
        allAnswers.forEach((answer, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.textContent = answer;
            optionDiv.dataset.answer = answer;
            optionDiv.onclick = () => selectOption(optionDiv);
            answerOptions.appendChild(optionDiv);
        });
    }
    
    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('currentScore').textContent = score;
    document.getElementById('progressBar').style.width = `${((currentQuestionIndex) / totalQuestions) * 100}%`;
    
    // Focus on input for text mode
    if (answerType === 'text') {
        answerInput.focus();
    }
}

function selectOption(optionElement) {
    if (hasAnswered) return;
    
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark new selection
    optionElement.classList.add('selected');
    selectedAnswer = optionElement.dataset.answer;
}

function checkAnswer() {
    if (hasAnswered) return;
    
    let userAnswer;
    let correctAnswer;
    const question = selectedQuestions[currentQuestionIndex];
    
    if (answerType === 'multiple') {
        if (!selectedAnswer) {
            // Flash the options to indicate selection is needed
            document.querySelectorAll('.answer-option').forEach(opt => {
                opt.style.animation = 'pulse 0.5s';
                setTimeout(() => opt.style.animation = '', 500);
            });
            return;
        }
        userAnswer = selectedAnswer;
    } else {
        const answerInput = document.getElementById('answerInput');
        userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            answerInput.focus();
            return;
        }
    }
    
    hasAnswered = true;
    
    // Determine correct answer based on mode
    if (currentMode === 'en-to-geo') {
        correctAnswer = question.georgian;
    } else if (currentMode === 'geo-to-en') {
        correctAnswer = question.word;
    } else { // mixed mode
        correctAnswer = question.expectedAnswer === 'georgian' ? question.georgian : question.word;
    }
    
    const isCorrect = answerType === 'multiple' 
        ? userAnswer === correctAnswer 
        : checkAnswerSimilarity(userAnswer, correctAnswer);
    
    // Show feedback
    const feedbackEl = document.getElementById('feedback');
    
    if (isCorrect) {
        score++;
        if (answerType === 'multiple') {
            document.querySelectorAll('.answer-option').forEach(opt => {
                if (opt.dataset.answer === correctAnswer) {
                    opt.classList.add('correct');
                }
                opt.classList.add('disabled');
            });
        } else {
            document.getElementById('answerInput').className = 'answer-input correct';
        }
        feedbackEl.className = 'feedback correct show';
        feedbackEl.innerHTML = '✓ Correct! Well done!';
    } else {
        if (answerType === 'multiple') {
            document.querySelectorAll('.answer-option').forEach(opt => {
                if (opt.dataset.answer === correctAnswer) {
                    opt.classList.add('correct');
                } else if (opt.classList.contains('selected')) {
                    opt.classList.add('incorrect');
                }
                opt.classList.add('disabled');
            });
        } else {
            document.getElementById('answerInput').className = 'answer-input incorrect';
        }
        feedbackEl.className = 'feedback incorrect show';
        feedbackEl.innerHTML = `✗ Incorrect. The correct answer is: <span class="correct-answer">${correctAnswer}</span>`;
    }
    
    // Update score
    document.getElementById('currentScore').textContent = score;
    
    // Disable input and show next button
    if (answerType === 'text') {
        document.getElementById('answerInput').disabled = true;
    }
    document.getElementById('checkBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    // Auto-advance for correct answers after delay
    if (isCorrect) {
        setTimeout(() => {
            if (hasAnswered) nextQuestion();
        }, 1500);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    document.querySelector('.quiz-screen').classList.remove('active');
    document.querySelector('.result-screen').classList.add('active');
    
    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('finalScore').textContent = `${percentage}%`;
    
    let grade = '';
    let message = '';
    
    if (percentage >= 90) {
        grade = 'Excellent! 🌟';
        message = 'Outstanding performance! You have mastered the vocabulary.';
    } else if (percentage >= 70) {
        grade = 'Good Job! 👍';
        message = 'Well done! Keep practicing to improve even more.';
    } else if (percentage >= 50) {
        grade = 'Not Bad 📚';
        message = 'You\'re getting there! Review the words and try again.';
    } else {
        grade = 'Keep Practicing 💪';
        message = 'Don\'t give up! Practice makes perfect.';
    }
    
    document.getElementById('grade').textContent = grade;
    document.getElementById('resultMessage').textContent = `You got ${score} out of ${totalQuestions} questions correct. ${message}`;
}

function restartQuiz() {
    startQuiz();
}

function changeSettings() {
    document.querySelector('.result-screen').classList.remove('active');
    document.querySelector('.start-screen').classList.add('active');
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);