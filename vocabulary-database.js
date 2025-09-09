// Centralized Vocabulary Database with Categories
const vocabularyDatabase = {
  categories: {
    "Phrasal Verbs & Expressions": [
      { word: "by means of", definition: "using something as a method or tool", georgian: "რაღაცის საშუალებით" },
      { word: "in favour of", definition: "supporting or approving of someone or something", georgian: "ვინმეს მხარდასაჭერად" },
      { word: "do me a favour", definition: "perform a helpful action for me", georgian: "გამიწიე სამსახური" },
      { word: "on behalf of", definition: "as a representative of", georgian: "ვიღაცის სახელით" },
      { word: "as for me", definition: "regarding myself", georgian: "რაც შემეხება მე" },
      { word: "regardless of", definition: "without being affected or influenced by", georgian: "მიუხედავად" },
      { word: "at a profit", definition: "resulting in financial gain", georgian: "მოგებით" },
      { word: "all by himself", definition: "completely alone", georgian: "სრულიად მარტო" },
      { word: "on average", definition: "typically; usually", georgian: "საშუალოდ" },
      { word: "by sight", definition: "by visual recognition", georgian: "ვიზუალურად" },
      { word: "at ease", definition: "relaxed; free from worry or tension", georgian: "მოდუნებული, მშვიდად" },
      { word: "long for", definition: "to strongly desire or miss", georgian: "მონატრება, აკლია" },
      { word: "in turn", definition: "one after another; as a result", georgian: "თავის მხრივ, შემდეგ" },
      { word: "in terms of", definition: "with regard to; from the point of view of", georgian: "თვალსაზრისით" },
      { word: "for instance", definition: "for example", georgian: "მაგალითად" },
      { word: "put off", definition: "to postpone", georgian: "გადადება" },
      { word: "put on", definition: "to deceive", georgian: "მოტყუება" },
      { word: "put out", definition: "to extinguish (e.g., fire)", georgian: "ჩაქრობა" },
      { word: "put up with", definition: "to tolerate", georgian: "შეგუება" },
      { word: "put down", definition: "to insult or humiliate", georgian: "დამცირება, შეურაცხყოფა" },
      { word: "ring up", definition: "to telephone", georgian: "დარეკვა" },
      { word: "run across", definition: "to meet/find unexpectedly", georgian: "შემთხვევით შეხვედრა" },
      { word: "run away", definition: "to leave home permanently as a minor", georgian: "გაქცევა" },
      { word: "run down", definition: "to criticize", georgian: "კრიტიკა" },
      { word: "run into", definition: "to meet unexpectedly", georgian: "შემთხვევით შეხვედრა" },
      { word: "call on / drop in", definition: "visit someone, often unexpectedly", georgian: "სტუმრად მისვლა" },
      { word: "live on", definition: "survive using a certain amount of resources", georgian: "სიცოცხლე / არსებობა რაიმეს ხარჯზე" },
      { word: "wean off", definition: "to gradually stop depending on something", georgian: "ჩამოშორება, შეჩვევა" },
      { word: "turn to", definition: "to go to someone or something for help or advice", georgian: "მიმართვა" },
      { word: "takes up", definition: "to begin a new hobby or activity", georgian: "დაწყება (განსაკუთრებით ჰობი)" },
      { word: "turn sour / fail", definition: "to go wrong or bad", georgian: "არ გამომივიდა, ცუდად დამთავრდა" },
      { word: "take part in", definition: "to participate", georgian: "მონაწილეობის მიღება" },
      { word: "count on / rely on", definition: "to trust or depend on", georgian: "შენი იმედი მაქვს" },
      { word: "give away", definition: "to give something for free", georgian: "უფასოდ დარიგება, ჩუქება" },
      { word: "take place", definition: "to happen, to occur", georgian: "მოხდენა, ადგილი ჰქონდა" },
      { word: "grow into", definition: "to develop into something gradually", georgian: "გადაიზარდა" },
      { word: "turn into", definition: "to become something different", georgian: "გადაიქცა" },
      { word: "come up", definition: "to occur or appear unexpectedly (e.g. an idea)", georgian: "თავში აზრის მოსვლა" },
      { word: "turn up", definition: "to arrive or appear", georgian: "გამოჩენა, მოსვლა" },
      { word: "turn out", definition: "to end up being / to result", georgian: "აღმოჩნდა" },
      { word: "goes pear-shaped", definition: "(idiom) goes wrong or fails", georgian: "რაღაც არ გამოვიდა / ჩავარდა" },
      { word: "fall on deaf ears", definition: "to be ignored or not listened to", georgian: "ყურად არ იღებენ" },
      { word: "word of mouth", definition: "spoken recommendation or gossip", georgian: "ვიღაცის ნათქვამი" },
      { word: "horse's mouth", definition: "directly from the original source", georgian: "პირდაპირ გავიგე" },
      { word: "take something for granted", definition: "fail to appreciate something", georgian: "რაიმეს ნორმალურად მიჩნევა" },
      { word: "take credit", definition: "to claim responsibility or praise", georgian: "მიიწერო დამსახურება" },
      { word: "take on", definition: "to accept (e.g., responsibility, work)", georgian: "თავის თავზე აღება" },
      { word: "let off", definition: "to allow someone to go free or without punishment", georgian: "გაუშვა / არ დასაჯო" },
      { word: "out on bail", definition: "released from jail after paying a deposit", georgian: "გირაოთი გამოშვება" },
      { word: "excel at", definition: "to be very good at something", georgian: "ბრწყინავს" },
      { word: "provide with", definition: "to supply something to someone", georgian: "უზრუნველყო ვინმე რაღაცით" },
      { word: "explain to", definition: "to make something clear to someone", georgian: "აუხსნა ვინმესთვის" },
      { word: "address (a problem)", definition: "to deal with or solve a problem", georgian: "პრობლემის გადაჭრა" },
      { word: "carry out", definition: "to do something that was planned or instructed", georgian: "განხორციელება, შესრულება" },
      { word: "getting ahead", definition: "progressing or succeeding", georgian: "დაწინაურება" },
      { word: "in comparison with", definition: "in relation to", georgian: "შედარებით" },
      { word: "lay off", definition: "dismiss someone from a job due to lack of work or funds", georgian: "თანამდებობიდან გათავისუფლება" },
      { word: "take turns", definition: "people doing the same thing one after another", georgian: "რიგრიგობით" }
    ],
    
    "Business & Economics": [
      { word: "payroll", definition: "a list of employees and their wages", georgian: "ხელფასების უწყისი" },
      { word: "cold-calling", definition: "unsolicited calls made to potential customers", georgian: "დაუპატიჟებელი კომერციული ზარები" },
      { word: "networking", definition: "the activity of meeting useful contacts, esp. for work", georgian: "პროფესიული კონტაქტების დამყარება" },
      { word: "prosperity", definition: "the state of being successful or wealthy", georgian: "კეთილდღეობა" },
      { word: "overheads", definition: "regular business expenses not directly tied to production", georgian: "ზედნადები ხარჯები" },
      { word: "output", definition: "the amount of something produced", georgian: "პროდუქცია" },
      { word: "outcome", definition: "the final result or consequence", georgian: "შედეგი" },
      { word: "outlay", definition: "an amount of money spent on something", georgian: "დანახარჯი, ხარჯი" },
      { word: "point of sale advertising", definition: "promotional materials displayed at the place of purchase", georgian: "გაყიდვის წერტილზე რეკლამა" },
      { word: "wages", definition: "regular payment for work, usually daily or weekly", georgian: "ხელფასი/ჯამაგირი" },
      { word: "margins", definition: "the difference between cost and selling price (profit)", georgian: "მოგება" },
      { word: "expenditures", definition: "the total amount of money spent", georgian: "დანახარჯები" },
      { word: "acquisition", definition: "the act of gaining or obtaining something gradually", georgian: "მონაპოვარი, მიღება" },
      { word: "downpayment", definition: "an initial amount of money paid when something is bought on credit", georgian: "პირველადი გადახდა" },
      { word: "demand for", definition: "need or desire for something", georgian: "მოთხოვნა რაღაცაზე" },
      { word: "expense", definition: "cost, money spent", georgian: "ხარჯი" },
      { word: "resort", definition: "a place for vacation or relaxation", georgian: "კურორტი" },
      { word: "top down", definition: "decision-making done by higher-ups, not by affected individuals", georgian: "ზემოდან ქვემოთ" },
      { word: "tax evasion", definition: "illegally avoiding paying taxes", georgian: "გადასახადებისგან თავის არიდება" },
      { word: "incentive", definition: "something that motivates or encourages", georgian: "წამახალისებელი" },
      { word: "tangible asset", definition: "a physical asset, like property", georgian: "ხელშესახები აქტივი" },
      { word: "intangible asset", definition: "non-physical value, like reputation", georgian: "არამატერიალური აქტივი" },
      { word: "brand volatility", definition: "tendency for a brand to fluctuate in value or stability", georgian: "ბრენდის არასტაბილურობა" }
    ],
    
    "Character & Personality Traits": [
      { word: "stingy", definition: "unwilling to give or spend; ungenerous", georgian: "ძუნწი" },
      { word: "assertiveness", definition: "confident and forceful behavior", georgian: "თავდაჯერებულობა" },
      { word: "devoted", definition: "very loyal or dedicated", georgian: "ერთგული" },
      { word: "devoted mom", definition: "a mother who shows deep love and commitment", georgian: "ერთგული დედა" },
      { word: "naive", definition: "innocent or inexperienced", georgian: "გულუბრყვილო" },
      { word: "gullible", definition: "easily fooled or deceived", georgian: "მიმნდობი" },
      { word: "greedy", definition: "wanting more than is needed", georgian: "ლოვი, გაუმაძღარი" },
      { word: "cruel", definition: "causing pain or suffering intentionally", georgian: "ბოროტი, ცუდი რაღაცეების გამკეთებელი" },
      { word: "unkind", definition: "not kind or nice", georgian: "ცუდი" },
      { word: "discreet", definition: "careful, reserved, modest", georgian: "მორიდებული" },
      { word: "modest", definition: "humble, not boastful", georgian: "თავმდაბალი" },
      { word: "gentle", definition: "kind and soft in manner", georgian: "ნაზი" },
      { word: "tight-fisted", definition: "not willing to spend money", georgian: "ხელმომჭირნე" },
      { word: "generous", definition: "willing to give more than necessary", georgian: "ხელგაშლილი" },
      { word: "rebellious", definition: "resisting authority or control", georgian: "მეამბოხე" },
      { word: "spoiled", definition: "overindulged and behaving badly", georgian: "გათამამებული" },
      { word: "pampered", definition: "given too much attention or care", georgian: "განებივრებული" },
      { word: "gracious", definition: "kind, courteous", georgian: "გულმოწყალე, თავაზიანი" },
      { word: "eloquent", definition: "fluent or persuasive in speaking or writing", georgian: "მჭერმეტყველი" },
      { word: "quarrelsome", definition: "argumentative", georgian: "ჩხუბის მოყვარული" },
      { word: "intrepid", definition: "fearless, adventurous", georgian: "უშიშარი, შეუპოვარი" },
      { word: "impartial", definition: "neutral, unbiased", georgian: "მიუკერძოებელი" },
      { word: "tough", definition: "strong or strict", georgian: "მკაცრი, მტკიცე" },
      { word: "strict", definition: "demanding that rules be obeyed", georgian: "მკაცრი" },
      { word: "fool", definition: "a silly or unwise person", georgian: "მასხარა, სულელი" },
      { word: "un-cuddly", definition: "not warm or affectionate", georgian: "არამოსიყვარულე, მკაცრი" }
    ],
    
    "Emotions & States": [
      { word: "relief", definition: "a feeling of reassurance and relaxation", georgian: "შვება" },
      { word: "desire", definition: "to want something, especially strongly", georgian: "სურვილი" },
      { word: "angst", definition: "a feeling of deep anxiety or dread", georgian: "სიბრაზე, შინაგანი შფოთვა" },
      { word: "fulfilling", definition: "making you feel happy and satisfied", georgian: "დამაკმაყოფილებელი" },
      { word: "loosen up", definition: "to relax physically or mentally", georgian: "გახურება" },
      { word: "trustworthy", definition: "able to be relied on as honest or truthful", georgian: "სანდო" },
      { word: "contagious", definition: "able to be spread to others (disease/emotions)", georgian: "გადამდები" },
      { word: "expressing their gratitude", definition: "showing thankfulness", georgian: "მადლიერების გამოხატვა" },
      { word: "frantic", definition: "almost out of control due to emotion or worry", georgian: "აფორიაქებული, პანიკაში მყოფი" },
      { word: "insulted", definition: "treated with disrespect or offense", georgian: "შეურაცხყოფილი" },
      { word: "overwhelmed", definition: "affected strongly, often emotionally", georgian: "გადატვირთული, უტყუარი" },
      { word: "affectionately", definition: "in a loving and caring way", georgian: "ალერსით, მოფერებით" },
      { word: "I'm content with", definition: "satisfied with", georgian: "კმაყოფილი" },
      { word: "passionately", definition: "with strong emotion", georgian: "მთელი გულით, ვნებით" },
      { word: "dissatisfaction", definition: "lack of contentment or approval", georgian: "უკმაყოფილება" },
      { word: "satisfaction", definition: "a feeling of pleasure or contentment", georgian: "კმაყოფილება" },
      { word: "gratitude", definition: "thankfulness", georgian: "მადლიერება" },
      { word: "conscience", definition: "a sense of right and wrong", georgian: "სინდისი" },
      { word: "fascination", definition: "strong interest or attraction", georgian: "მოზიდულობა, ინტერესი" },
      { word: "frenetic", definition: "fast and energetic in a wild and uncontrolled way", georgian: "გააფთრებული" }
    ],
    
    "Actions & Behaviors": [
      { word: "obey", definition: "to follow commands or rules", georgian: "დამორჩილება" },
      { word: "evoke", definition: "to bring a feeling, memory, or image into the mind", georgian: "გამოწვევა" },
      { word: "condemn", definition: "to express strong disapproval", georgian: "დაგმობა" },
      { word: "march", definition: "to walk in a steady, regular rhythm", georgian: "მარშით სიარული" },
      { word: "wander", definition: "to walk or move aimlessly", georgian: "ხეტიალი, ბორიალი" },
      { word: "fled", definition: "ran away from danger or persecution", georgian: "გაიქცნენ, გამოქცეულები" },
      { word: "crack", definition: "mentally or physically ill; to solve or break through something", georgian: "მენტალურად ან ფიზიკურად გაფუჭება, პასუხის პოვნა" },
      { word: "solicit", definition: "to ask for or try to obtain something", georgian: "შუამავლობა, ადვოკატობა" },
      { word: "pursuing", definition: "trying to achieve something", georgian: "მისწრაფება, მცდელობა" },
      { word: "undertaking", definition: "a formal promise, responsibility, or project", georgian: "პასუხისმგებლობა, წამოწყება" },
      { word: "forge", definition: "to shape by heating; to move forward with effort", georgian: "გამოჭედვა, გაჭირვებით წინსვლა" },
      { word: "allocate", definition: "to assign or distribute something", georgian: "განაწილება" },
      { word: "tailor", definition: "someone who makes clothes; to adapt something for a purpose", georgian: "მკერავი / მორგება" },
      { word: "envisage", definition: "to imagine or predict something", georgian: "წარმოდგენა, წარმოსახვა" },
      { word: "foresee", definition: "to predict or know about something before it happens", georgian: "წინასწარ დანახვა, პროგნოზირება" },
      { word: "comprehend", definition: "to understand something completely", georgian: "აღქმა, გაგება" },
      { word: "dash", definition: "to move quickly or suddenly", georgian: "გაქცევა, სწრაფად წასვლა" },
      { word: "reassess", definition: "to evaluate again or differently", georgian: "გადაფასება" },
      { word: "conducted", definition: "led or managed something", georgian: "გაძღოლა, წარმართვა" },
      { word: "reveal", definition: "to make known or show something hidden", georgian: "გამოაშკარავება" },
      { word: "deliberately", definition: "intentionally; with a purpose", georgian: "განზრახ, მიზანმიმართულად" },
      { word: "maintain", definition: "to keep in good condition or unchanged", georgian: "შენარჩუნება" },
      { word: "participate", definition: "to take part in an activity", georgian: "მონაწილეობის მიღება" },
      { word: "betray", definition: "to be disloyal or unfaithful", georgian: "ღალატი" },
      { word: "cope", definition: "to deal successfully with difficulties", georgian: "გამკლავება" },
      { word: "match", definition: "to correspond, be equal, or make a suitable pair", georgian: "დამთხვევა, შესაბამისობა" },
      { word: "retaining", definition: "keeping or holding onto something", georgian: "შენარჩუნება" },
      { word: "intending", definition: "having a plan or purpose", georgian: "განზრახვა" },
      { word: "wandering", definition: "moving around without a fixed path", georgian: "მოხეტიალე" },
      { word: "wondering", definition: "being curious or asking oneself", georgian: "აინტერესებს" },
      { word: "summoned", definition: "called formally, especially in official context", georgian: "მოხმობა" },
      { word: "appraise", definition: "to evaluate or assess", georgian: "შეფასება" },
      { word: "apprise", definition: "to inform or evaluate", georgian: "ინფორმირება, შეფასება" },
      { word: "distinguish", definition: "to recognize or point out differences", georgian: "გამოყოფა, გამორჩეული, განსხვავება" },
      { word: "allot", definition: "to assign or distribute a portion", georgian: "გადანაწილება" },
      { word: "digressing", definition: "straying from the main topic", georgian: "თემიდან გადახვევა" },
      { word: "rally", definition: "come together for a common purpose", georgian: "გაერთიანება საერთო მიზნისთვის" },
      { word: "deceive", definition: "to mislead or trick", georgian: "მოტყუება" },
      { word: "recall", definition: "to remember something", georgian: "გახსენება" },
      { word: "soar", definition: "to increase quickly", georgian: "მკვეთრი ზრდა" },
      { word: "consider", definition: "to think carefully about something", georgian: "განვიხილო" },
      { word: "alter", definition: "to change", georgian: "შეცვლა" },
      { word: "recounted", definition: "described in detail", georgian: "დეტალურად აღწერა" },
      { word: "afford", definition: "to be able to do or buy something", georgian: "გაწვდეს / მოახერხოს" },
      { word: "sue", definition: "to start a legal case against someone", georgian: "სასამართლოში ჩივილი" },
      { word: "release", definition: "to set free", georgian: "გამთავისუფლება" },
      { word: "assess", definition: "to evaluate", georgian: "შეფასება" },
      { word: "counter", definition: "to act in opposition or reply", georgian: "პასუხი, კონტრაქტირება" },
      { word: "retain", definition: "to keep or hold on to", georgian: "შენარჩუნება" },
      { word: "accomplish", definition: "to succeed in doing something", georgian: "მიღწევა" },
      { word: "duped / tricked", definition: "deceived or misled", georgian: "გააცურო, მოატყუო" },
      { word: "forecast / foretell", definition: "to predict something will happen in the future", georgian: "წინასწარმეტყველება" },
      { word: "tarnish", definition: "to damage reputation or value", georgian: "სახელს შელახვა" },
      { word: "desert", definition: "to leave someone/something behind", georgian: "მიტოვება" },
      { word: "rotate", definition: "to take turns in doing something", georgian: "მონაცვლეობა" },
      { word: "outperform", definition: "to do better than others", georgian: "აჯობო" },
      { word: "humiliate", definition: "to make someone feel ashamed or foolish", georgian: "დამცირება" },
      { word: "exonerate", definition: "to clear from blame or guilt", georgian: "რეაბილიტაცია, გამართლება" },
      { word: "encourage", definition: "to inspire or give confidence", georgian: "წახალისება" },
      { word: "praise", definition: "to express approval or admiration", georgian: "შექება, აღიარება" },
      { word: "struggle", definition: "a hard effort or fight", georgian: "ბრძოლა" },
      { word: "capture", definition: "to take, attract, or seize", georgian: "დატყვევება, დაინტერესება" }
    ],
    
    "Communication & Language": [
      { word: "concisely", definition: "in a brief and clear manner", georgian: "მოკლედ, კონსპექტურად" },
      { word: "connotations", definition: "the feelings or ideas that a word suggests beyond its literal meaning", georgian: "შრე, გადატანითი მნიშვნელობა" },
      { word: "implications", definition: "indirect suggestions or meanings; consequences", georgian: "შეფარული მინიშნება, არაპირდაპირი მნიშვნელობა" },
      { word: "proverb", definition: "a short well-known saying that expresses a general truth", georgian: "ანდაზა" },
      { word: "proverbial", definition: "well known, often used", georgian: "ცნობადი, ანდაზური" },
      { word: "soundbite", definition: "short memorable phrase used in media", georgian: "მოკლე დასამახსოვრებელი ფრაზა" },
      { word: "orally", definition: "spoken rather than written", georgian: "ზეპირად, სიტყვიერად" },
      { word: "persuasive", definition: "able to convince", georgian: "დამაჯერებელი" },
      { word: "revealing", definition: "making known something previously hidden", georgian: "გახსნა, გამოაშკარავება" }
    ],
    
    "Concepts & Abstract Ideas": [
      { word: "mere", definition: "nothing more than; just", georgian: "უბრალოდ, მხოლოდ" },
      { word: "convenience", definition: "suitability for one's comfort or needs", georgian: "კომფორტი, მოხერხებულობა" },
      { word: "insights", definition: "a clear and deep understanding", georgian: "გამჭრიახობა, ღრმა გააზრება" },
      { word: "conquest", definition: "the act of conquering or gaining control", georgian: "დაპყრობა" },
      { word: "sanctuary", definition: "a safe or sacred place", georgian: "თავშესაფარი" },
      { word: "mundane", definition: "ordinary, dull, or lacking interest", georgian: "საერო, ბანალური" },
      { word: "wanderlust", definition: "a strong desire to travel and explore", georgian: "მოგზაურობის სურვილი, ხეტიალის ჟინი" },
      { word: "therefore", definition: "as a result; for that reason", georgian: "მაშასადამე" },
      { word: "chasm", definition: "a deep fissure in the earth, rock, or another surface", georgian: "ღრმა ხევი, უფსკრული" },
      { word: "reliability", definition: "the quality of being dependable", georgian: "სანდოობა" },
      { word: "awareness", definition: "knowledge or perception of a situation", georgian: "ცნობიერება" },
      { word: "rapport", definition: "a close and harmonious relationship", georgian: "კარგი ურთიერთობა" },
      { word: "compatible", definition: "able to exist or work together", georgian: "თავსებადი" },
      { word: "barrage", definition: "an overwhelming quantity", georgian: "თავდასხმა, საჩივრების დიდი რაოდენობა, ჯებირი" },
      { word: "credibility", definition: "quality of being trusted or believed", georgian: "სანდოობა" },
      { word: "hence", definition: "as a result; for this reason", georgian: "ამგვარად, აქედან გამომდინარე" },
      { word: "sophistication", definition: "the quality of being complex, refined, or cultured", georgian: "დახვეწილობა" },
      { word: "firmness", definition: "strong determination or stability", georgian: "სიმტკიცე" },
      { word: "contentions", definition: "disputes; disagreements", georgian: "კამათი, დაპირისპირება" },
      { word: "outset", definition: "the beginning or start of something", georgian: "დასაწყისი" },
      { word: "significant", definition: "important or meaningful", georgian: "მნიშვნელოვანი" },
      { word: "shortfall", definition: "a lack or deficiency", georgian: "დეფიციტი" },
      { word: "insight", definition: "deep understanding of a person or situation", georgian: "გამჭრიახობა, სიღრმისეული გაგება" },
      { word: "influence", definition: "the power to affect others", georgian: "გავლენა" },
      { word: "no matter", definition: "it doesn't make a difference", georgian: "არა უშავს" },
      { word: "it doesn't matter", definition: "not important", georgian: "მნიშვნელობა არ აქვს" },
      { word: "by mistake", definition: "unintentionally", georgian: "შეცდომით" },
      { word: "lower expectations", definition: "to reduce hopes or assumptions", georgian: "მოლოდინების დაკლება" },
      { word: "common ground", definition: "shared interests or opinions", georgian: "საერთო საფუძველი" },
      { word: "likely", definition: "probable or expected", georgian: "შესაძლებელია" },
      { word: "intention", definition: "purpose or aim", georgian: "განზრახვა" },
      { word: "successor", definition: "one who takes over a role or position", georgian: "მემკვიდრე" },
      { word: "lack", definition: "absence or shortage", georgian: "ნაკლებობა" },
      { word: "by all means", definition: "certainly, of course", georgian: "რათქმაუნდა" },
      { word: "mean", definition: "definition; also cruel (contextual)", georgian: "მნიშვნელობა; ბოროტი" },
      { word: "venture", definition: "a new activity, usually involving risk", georgian: "რისკიანი წამოწყება" },
      { word: "schedule", definition: "a timetable or plan of activities", georgian: "განრიგი" },
      { word: "widget", definition: "any small gadget or device", georgian: "პატარა მოწყობილობა (სახელდაუდებელი)" },
      { word: "retention", definition: "act of keeping something", georgian: "შენარჩუნება, შეკავება" },
      { word: "implication", definition: "a suggestion without stating directly", georgian: "ნიშანი, მინიშნება" },
      { word: "quantified", definition: "expressed as a number", georgian: "რაოდენობრივად გამოხატული" },
      { word: "approach", definition: "a way of dealing with something", georgian: "მიდგომა, დამოკიდებულება" },
      { word: "hindsight", definition: "understanding a situation only after it has happened", georgian: "შემდგომი გააზრება" },
      { word: "overview", definition: "a brief summary", georgian: "მიმოხილვა" },
      { word: "nutshell", definition: "in brief, summary", georgian: "მოკლედ, თხლად" },
      { word: "at present", definition: "currently, now", georgian: "ამჟამად" },
      { word: "be present", definition: "to attend", georgian: "დასწრება" },
      { word: "purpose", definition: "the reason for something; an aim or goal", georgian: "დანიშნულება, მიზანი" },
      { word: "rather", definition: "somewhat, instead, or preferably", georgian: "საკმაოდ / გირჩევნია / უფრო სწორედ" },
      { word: "solely", definition: "only, exclusively", georgian: "მხოლოდ" },
      { word: "determination", definition: "resolve; firmness of purpose", georgian: "მიზანდასახულობა, განსაზღვრულობა" },
      { word: "vital", definition: "essential; absolutely necessary", georgian: "სასიცოცხლო" },
      { word: "fast-paced", definition: "moving or developing quickly", georgian: "სწრაფი ტემპით" },
      { word: "on the contrary", definition: "expressing the opposite", georgian: "პირიქით, პირისპირ" },
      { word: "unconscious", definition: "not aware or responsive", georgian: "უგონო, გაუცნობიერებელი" },
      { word: "conscious", definition: "aware of and responding to one's surroundings", georgian: "შეგნებული" },
      { word: "subconsciously", definition: "occurring in the mind without awareness", georgian: "ქვეცნობიერად" },
      { word: "inevitably", definition: "certainly going to happen", georgian: "გარდაუვლად" },
      { word: "ultimately victorious", definition: "finally winning or succeeding", georgian: "საბოლოოდ გამარჯვებული" },
      { word: "perceptions", definition: "the way something is understood or interpreted", georgian: "აღქმა" },
      { word: "premise", definition: "a basic assumption or idea", georgian: "საფუძველი" },
      { word: "inventiveness", definition: "ability to create new things", georgian: "გამომგონებლობა" },
      { word: "gains", definition: "benefits or profits obtained", georgian: "მიღწევები, მოპოვება" },
      { word: "assumptions", definition: "beliefs accepted without proof", georgian: "ვარაუდები, თვალთმაქცი, მითვისება" },
      { word: "insular", definition: "isolated; not open to different ideas or people", georgian: "იზოლირებული, გულჩათხრობილი" },
      { word: "egalitarian", definition: "promoting equal rights", georgian: "თანასწორუფლებიანი" },
      { word: "redundant", definition: "unnecessary, repetitive", georgian: "ზედმეტი" },
      { word: "notoriety", definition: "famous for something bad", georgian: "ცნობილი ცუდი რეპუტაციით" },
      { word: "in order", definition: "for the purpose of", georgian: "იმისათვის რომ" },
      { word: "rank", definition: "position in a hierarchy or classification", georgian: "რანგი, წოდება" },
      { word: "reward", definition: "something given in return for good work or behavior", georgian: "ჯილდო" },
      { word: "a range of", definition: "a variety or group of something", georgian: "მთელი რიგი" },
      { word: "calamity", definition: "a serious misfortune or disaster", georgian: "კატასტროფა, უბედურება" },
      { word: "untoward", definition: "unexpected and unpleasant", georgian: "არასასურველი, უსიამოვნო" },
      { word: "scrutiny", definition: "close and careful examination", georgian: "დაკვირვება, დეტალური შესწავლა" }
    ],
    
    "People & Relationships": [
      { word: "preachers", definition: "people who deliver religious or moral messages publicly", georgian: "მქადაგებლები" },
      { word: "scholars", definition: "educated individuals who study or research a subject in depth", georgian: "მეცნიერთა, სწავლულები" },
      { word: "prenuptial", definition: "existing or occurring before marriage", georgian: "წინასაქორწინო" },
      { word: "spouse", definition: "a husband or wife", georgian: "მეუღლე" },
      { word: "rivals", definition: "opponents or competitors", georgian: "მოწინააღმდეგე, მეტოქე" },
      { word: "statesmen", definition: "experienced political leader", georgian: "სახელმწიფო მოღვაწე" },
      { word: "peer", definition: "someone equal in age, status, or ability", georgian: "თანატოლი" },
      { word: "ally", definition: "a partner or supporter in a cause or conflict", georgian: "მოკავშირე" },
      { word: "solicitor", definition: "a legal adviser or lawyer", georgian: "ადვოკატი, შუამავალი" },
      { word: "someone lives with my expense", definition: "I pay for someone else's needs", georgian: "ვიღაც ჩემი ხარჯით ცხოვრობს" }
    ],
    
    "Descriptive Adjectives": [
      { word: "vast", definition: "extremely large in size or amount", georgian: "უზარმაზარი, ფართო" },
      { word: "silvery", definition: "shiny and pale like silver", georgian: "ვერცხლისფერი" },
      { word: "lousy", definition: "very bad or unpleasant", georgian: "ცუდი, საზიზღარი" },
      { word: "immersed", definition: "deeply involved or absorbed in something", georgian: "ბოლომდე ჩართული" },
      { word: "astounding", definition: "very surprising or impressive", georgian: "გასაოცარი" },
      { word: "nasty", definition: "very unpleasant or offensive", georgian: "ცუდი, საზიზღარი" },
      { word: "acute", definition: "severe or intense", georgian: "მწვავე, გამწვავებული" },
      { word: "despite", definition: "without being affected by", georgian: "მიუხედავად" },
      { word: "ancient", definition: "very old", georgian: "ძველი, უძველესი" },
      { word: "distinctly", definition: "clearly, noticeably", georgian: "აშკარად, გამოკვეთილად" },
      { word: "disagreeable", definition: "unpleasant or offensive", georgian: "უსიამოვნო" },
      { word: "well off", definition: "rich, wealthy", georgian: "შეძლებული, მდიდარი" },
      { word: "wealth", definition: "abundance of valuable resources or money", georgian: "სიმდიდრე" },
      { word: "rigged", definition: "manipulated dishonestly", georgian: "ჩაწყობილი" },
      { word: "greed", definition: "intense desire for more than needed", georgian: "სიხარბე" },
      { word: "volatile", definition: "unstable; likely to change suddenly or explode", georgian: "არასტაბილური, ფეთქებადი, აალებადი" },
      { word: "interestingly", definition: "in a way that arouses curiosity", georgian: "საინტერესოა" },
      { word: "appealing", definition: "attractive or interesting", georgian: "საინტერესო, მიმზიდველი" },
      { word: "worryingly", definition: "causing concern", georgian: "შემაშფოთებლად" },
      { word: "spacious", definition: "having lots of space", georgian: "ფართო" },
      { word: "pervasive", definition: "spreading widely throughout", georgian: "გავრცელებული" },
      { word: "admired", definition: "respected and approved of", georgian: "აღფრთოვანებული" },
      { word: "humblebrag", definition: "false modesty, modest boasting", georgian: "ყალბი თავმდაბლობა, მოკრძალებული მკვეხარა" },
      { word: "perception", definition: "the way you think or understand something", georgian: "აღქმა, გაგება" },
      { word: "precisely / exactly / just so", definition: "accurately; that's right", georgian: "ზუსტად, ნამდვილად" },
      { word: "credible", definition: "believable, trustworthy", georgian: "სანდო, დასაჯერებელი" },
      { word: "irritating", definition: "causing annoyance", georgian: "გამაღიზიანებელი" },
      { word: "fertile", definition: "capable of producing crops or offspring", georgian: "ნაყოფიერი, ნოყიერი" },
      { word: "conventional", definition: "usual or traditional", georgian: "ჩვეულებრივი" },
      { word: "outstanding", definition: "clearly better than average", georgian: "გამორჩეული" },
      { word: "excellent", definition: "extremely good", georgian: "შესანიშნავი" },
      { word: "not paid", definition: "work or service done without receiving money", georgian: "უხელფასო, გადაუხდელი" },
      { word: "adversarial", definition: "involving conflict or opposition", georgian: "მოწინააღმდეგური" },
      { word: "demanding", definition: "requiring a lot of effort", georgian: "მომთხოვნი" },
      { word: "pacifying", definition: "calming or soothing", georgian: "დამამშვიდებელი" },
      { word: "ditto", definition: "same as said before", georgian: "იგივე, მსგავსად" },
      { word: "alleged", definition: "claimed to be true but not yet proven", georgian: "სავარაუდო, დადანაშაულებული" },
      { word: "pear-shaped", definition: "shaped like a pear", georgian: "მსხლის ფორმის" },
      { word: "toughie", definition: "a difficult situation or person", georgian: "რთული საქმე ან ადამიანი" },
      { word: "cast iron", definition: "very strong or dependable", georgian: "გამძლე, რკინის, ჩამოსხმული რკინა" },
      { word: "up to the minute", definition: "containing all the most recent information", georgian: "უახლესი, ახლახან" },
      { word: "disproportionately", definition: "too large or small in comparison", georgian: "არათანაბრად" }
    ],
    
    "Time & Frequency": [
      { word: "seldom", definition: "not often; rarely", georgian: "იშვიათად" },
      { word: "consequently", definition: "as a result", georgian: "შედეგად" },
      { word: "throughout", definition: "in every part, or during the whole period", georgian: "მთელ პერიოდში, ყველგან" },
      { word: "swiftly", definition: "quickly; at high speed", georgian: "სწრაფად" },
      { word: "beforehand", definition: "in advance", georgian: "წინასწარ" }
    ],
    
    "Other/Miscellaneous": [
      { word: "entertainment", definition: "activities that provide amusement or enjoyment", georgian: "გართობა" },
      { word: "admission", definition: "the process of being admitted to a hospital or institution", georgian: "ჰოსპიტალიზაცია" },
      { word: "means of transportation", definition: "methods or systems for moving people or goods", georgian: "ტრანსპორტის საშუალებები" },
      { word: "trial", definition: "a test period", georgian: "გამოსაცდელი პერიოდი" },
      { word: "root causes", definition: "fundamental reasons", georgian: "ძირეული მიზეზები" },
      { word: "aim", definition: "a goal or target", georgian: "მიზანი" },
      { word: "aims", definition: "goals or targets", georgian: "მიზნები" },
      { word: "to sour", definition: "to develop an unpleasant taste or mood", georgian: "მჟავობა, გაწბილება" },
      { word: "impartiality", definition: "fairness; not taking sides", georgian: "მიუკერძოებლობა" },
      { word: "treatment", definition: "the way someone is dealt with; also medical care", georgian: "მოპყრობა, გამასპინძლება" },
      { word: "reconciliation", definition: "restoring friendly relations", georgian: "შემორიგება" },
      { word: "healing", definition: "becoming healthy again", georgian: "განკურნება" },
      { word: "acquitted", definition: "declared not guilty", georgian: "გამართლდა" },
      { word: "interrogations", definition: "formal questioning", georgian: "დაკითხვა, გამოკითხვა" },
      { word: "flaw", definition: "a fault or imperfection", georgian: "ნაკლი" },
      { word: "demand", definition: "an urgent request or need", georgian: "მოთხოვნა" },
      { word: "crops", definition: "cultivated plants grown for food", georgian: "მოსავალი, მარცვლეული" },
      { word: "life expectancy", definition: "average time a person is expected to live", georgian: "სიცოცხლის ხანგრძლივობა" },
      { word: "hamster", definition: "a small rodent kept as a pet", georgian: "ზაზუნა" },
      { word: "fame", definition: "being known or recognized by many people", georgian: "სახელი, დიდება" },
      { word: "stamina", definition: "physical or mental strength to continue", georgian: "გამძლეობა, სასიცოცხლო ძალა" },
      { word: "dice", definition: "small cubes used in games", georgian: "კამათელი" },
      { word: "evidence", definition: "facts or information supporting a claim", georgian: "მტკიცებულება" },
      { word: "pound", definition: "British currency OR to beat/heavily hit", georgian: "ფუნტი სტერლინგი / ძლიერი დარტყმა" },
      { word: "camaraderie", definition: "friendly feeling between people in a group", georgian: "მეგობრული ურთიერთობა, თანადგომა" },
      { word: "cipher", definition: "a secret or disguised way of writing; a code", georgian: "შიფრი" }
    ]
  },
  
  // Helper function to get all vocabulary items
  getAllVocabulary: function() {
    let allWords = [];
    for (const category in this.categories) {
      allWords = allWords.concat(this.categories[category]);
    }
    return allWords;
  },
  
  // Helper function to get vocabulary by category
  getByCategory: function(categoryName) {
    return this.categories[categoryName] || [];
  },
  
  // Helper function to get category list
  getCategoryList: function() {
    return Object.keys(this.categories);
  },
  
  // Helper function to search vocabulary
  searchVocabulary: function(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase();
    
    for (const category in this.categories) {
      this.categories[category].forEach(item => {
        if (item.word.toLowerCase().includes(term) || 
            item.definition.toLowerCase().includes(term) || 
            item.georgian.includes(term)) {
          results.push({...item, category: category});
        }
      });
    }
    return results;
  },
  
  // Get random words from specific category or all
  getRandomWords: function(count, category = null) {
    let pool = category ? this.getByCategory(category) : this.getAllVocabulary();
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },
  
  // Get statistics
  getStatistics: function() {
    const stats = {
      totalWords: 0,
      categoryCounts: {}
    };
    
    for (const category in this.categories) {
      const count = this.categories[category].length;
      stats.categoryCounts[category] = count;
      stats.totalWords += count;
    }
    
    return stats;
  }
};

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = vocabularyDatabase;
}