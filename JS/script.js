const wordLists = {
    fr: [
        'rire', 'lune', 'main', 'nuit', 'rose', 'jour', 'feu', 'jeux', 'vent', 'lion', 'doux',
        'bleu', 'plage', 'fort', 'vite', 'peur', 'joie', 'paix', 'rêve', 'mer', 'eau', 'air', 'sol',
        'vue', 'nez', 'sel', 'mot', 'lit', 'ami', 'joue', 'bras', 'corps', 'aide', 'beau', 'maux',
        'voix', 'gris', 'noir', 'lent', 'fou', 'dur', 'haut', 'bas', 'sac', 'amour', 'espoir',
        'sourire', 'légende', 'père', 'faire', 'donner', 'étoile', 'arbre', 'voyage', 'montagne',
        'océan', 'chemin', 'paysage', 'soleil', 'fantaisie', 'horizon', 'lumière', 'ombre',
        'arc-en-ciel', 'vitesse', 'secret', 'énergie', 'créativité', 'chanson', 'bonté', 'rêverie',
        'voyageur', 'désert', 'fleur', 'voler', 'espace', 'galaxie', 'planète', 'papillon',
        'mélodie', 'détente', 'bonheur', 'fête', 'univers', 'champagne', 'vacances', 'aventure',
        'neige', 'hiver', 'printemps', 'été', 'automne', 'chocolat', 'gâteau', 'miel', 'vanille',
        'fraise', 'fraîcheur', 'vagues', 'surf', 'piscine', 'sable', 'rivière', 'parapluie',
        'saison', 'déluge', 'cyclone', 'invisible', 'merveilleux', 'étoilé', 'lumineuse',
        'aventureux', 'créatif', 'abondance', 'fantastique', 'universel', 'partage', 'volcanique',
        'submergé', 'renouveau', 'explosion', 'paradis', 'mystique', 'terrible', 'cheminée',
        'matinée', 'arcade', 'joyeuse', 'impressionnant',
        'Circonstanciellement','Désinstitutionnaliser','Électromagnétiquement','Inconstitutionnalité','Interdépartemental','Internationnalisation',
        'Particulièrement','Professionnellement','Révolutionnairement','Substantiellement','Systématiquement',
        'Télécommunications','Transcontinental','Vraisemblablement',
    ],
    en: [
        'dream', 'light', 'sun', 'sky', 'moon', 'star', 'wave', 'love', 'peace', 'hope',
        'kind', 'fun', 'fast', 'slow', 'blue', 'red', 'green', 'dark', 'shine',
        'rain', 'wind', 'fire', 'land', 'tree', 'leaf', 'bird', 'fish', 'song', 'play',
        'sing', 'read', 'draw', 'cook', 'walk', 'talk', 'help', 'give', 'take', 'stop',
        'open', 'close', 'push', 'pull', 'jump', 'swim', 'grow', 'know', 'live', 'here',
        'there', 'this', 'that', 'each', 'some', 'many', 'few', 'one', 'two', 'three',
        'four', 'five', 'first', 'last', 'now', 'then', 'soon', 'late', 'today', 'never',
        'always', 'often', 'maybe', 'yes', 'no', 'why', 'how', 'what', 'when', 'where',
        'who', 'big', 'small', 'tall', 'short', 'good', 'bad', 'happy', 'sad', 'cold',
        'bright', 'sunbeam', 'freedom', 'holiday', 'journey', 'sunrise', 'evening',
        'explore', 'skyline', 'creative', 'dreaming', 'believe', 'flowers', 'harmony',
        'picture', 'smiling', 'writing', 'dancing', 'balance', 'awesome', 'genuine',
        'happiest', 'natural', 'powerful', 'friendly', 'meaning', 'sunlight', 'sparkles',
        'inspired', 'comfort', 'support', 'tranquil', 'learning', 'teacher', 'builder',
        'mission', 'freight', 'adventure', 'sunshine', 'magnetic', 'delight',
        'mission', 'freight', 'adventure', 'sunshine', 'magnetic', 'delight',
        'gentle', 'wisdom', 'silence', 'precious', 'courage', 'honesty', 'passion',
        'success', 'healthy', 'perfect', 'amazing', 'brilliant', 'glowing', 'shining',
        'sparkling','extraordinary', 'understanding', 'unforgettable', 'communication',
        'responsibility', 'congratulation', 'recommendation', 'environmentalist',
        'characteristics', 'representation', 'inspirational', 'international',
        'consciousness', 'determination', 'multiplication', 'infrastructure',
        'transformative', 'revolutionary', 'collaboration', 'implementation',
        'acknowledgement', 'accomplishment', 'administration', 'announcement',
        'anthropologist', 'appreciation', 'architecturally', 'circumference',
        'collaborations', 'comprehension', 'congratulating', 'consideration',
        'constitutional', 'contamination', 'contemplation', 'contribution',
        'conversational', 'decisionmaking', 'demonstrations', 'disappointment',
        'discrimination', 'documentation', 'encouragement', 'entrepreneurial',
        'establishment', 'exceptionality', 'extraordinaire', 'globalization',
        'independently', 'individualism', 'informational', 'instrumentalist',
        'internationally', 'irresponsible', 'justification', 'misunderstood',
        'multicultural', 'neighborhoods', 'overconfidence', 'oversimplified',
        'participation', 'perseverance', 'prequalification', 'reconsideration',
        'representative', 'scientifically', 'self-realization', 'self-reflection',
        'sophistication', 'spirituality', 'standardization', 'transportation',
        'underestimated', 'unpredictable', 'unquestionable'
    ]

};
// ici sera la traduction pour chaque langue
const translations = {
    fr: {
        title: "Test de Frappe Pro",
        language: "Langue",
        wordCount: "Nombre de mots",
        difficulty: "Difficulté",
        timeLimit: "Limite de temps",
        easy: "Facile",
        medium: "Moyen",
        hard: "Difficile",
        restart: "Redémarrer",
        close: "Fermer",
        wpm: "WPM",
        accuracy: "Précision",
        completed: "Mots Terminés",
        errors: "Erreur(s)"
    },
    en: {
        title: "Typing Test Pro",
        language: "Language",
        wordCount: "Word count",
        difficulty: "Difficulty",
        timeLimit: "Time limit",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        restart: "Restart",
        close: "Close",
        wpm: "WPM",
        accuracy: "Accuracy",
        completed: "Completed",
        errors: "Errors"
    }
};
class TypingTest {
    constructor() {
        this.words = [];
        this.currentWordIndex = 0;
        this.timeLeft = parseInt(document.getElementById('timeLimit').value); // Initialise avec la valeur du select
        this.isActive = false;
        this.currentLanguage = 'fr';
        this.stats = {
            wpm: 0,
            accuracy: 0,
            completed: 0,
            errors: 0
        };
        this.timer = null;
        this.wordErrors = [];

        this.elements = {
            wordCount: document.getElementById('wordCount'),
            timeLimit: document.getElementById('timeLimit'),
            difficulty: document.getElementById('difficulty'),
            timer: document.getElementById('timer'),
            wordsContainer: document.getElementById('words'),
            input: document.getElementById('input'),
            restart: document.getElementById('restart'),
            uiContainer: document.getElementById('uiContainer'),
            themeToggle: document.getElementById('themeToggle'),
            settingsButton: document.getElementById('settingsButton'),
            settingsModal: document.getElementById('settingsModal'),
            closeSettings: document.getElementById('closeSettings'),
            wpm: document.getElementById('wpm'),
            accuracy: document.getElementById('accuracy'),
            completed: document.getElementById('completed'),
            errors: document.getElementById('errors'),
            language: document.getElementById('language')
        };

        this.initializeEventListeners();
        this.initializeTheme();
        this.generateWords();
        this.updateTimerDisplay(); // Initialise l'affichage du timer
        this.updateStats();
        this.updateLanguageTexts();
    }
















































let startTime = null, previousEndTime = null;
let currentWordIndex = 0;
const wordsToType = [];

const modeSelect = document.getElementById("mode");
const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");

const words = {
    easy: ["apple", "banana", "grape", "orange", "cherry"],
    medium: ["keyboard", "monitor", "printer", "charger", "battery"],
    hard: ["synchronize", "complicated", "development", "extravagant", "misconception"]
};

// Generate a random word from the selected mode
const getRandomWord = (mode) => {
    const wordList = words[mode];
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Initialize the typing test
const startTest = (wordCount = 50) => {
    wordsToType.length = 0; // Clear previous words
    wordDisplay.innerHTML = ""; // Clear display
    currentWordIndex = 0;
    startTime = null;
    previousEndTime = null;

    for (let i = 0; i < wordCount; i++) {
        wordsToType.push(getRandomWord(modeSelect.value));
    }

    wordsToType.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        if (index === 0) span.style.color = "red"; // Highlight first word
        wordDisplay.appendChild(span);
    });

    inputField.value = "";
    results.textContent = "";
};

// Start the timer when user begins typing
const startTimer = () => {
    if (!startTime) startTime = Date.now();
};

// Calculate and return WPM & accuracy
const getCurrentStats = () => {
    const elapsedTime = (Date.now() - previousEndTime) / 1000; // Seconds
    const wpm = (wordsToType[currentWordIndex].length / 5) / (elapsedTime / 60); // 5 chars = 1 word
    const accuracy = (wordsToType[currentWordIndex].length / inputField.value.length) * 100;

    return { wpm: wpm.toFixed(2), accuracy: accuracy.toFixed(2) };
};

// Move to the next word and update stats only on spacebar press
const updateWord = (event) => {
    if (event.key === " ") { // Check if spacebar is pressed
        if (inputField.value.trim() === wordsToType[currentWordIndex]) {
            if (!previousEndTime) previousEndTime = startTime;

            const { wpm, accuracy } = getCurrentStats();
            results.textContent = `WPM: ${wpm}, Accuracy: ${accuracy}%`;

            currentWordIndex++;
            previousEndTime = Date.now();
            highlightNextWord();

            inputField.value = ""; // Clear input field after space
            event.preventDefault(); // Prevent adding extra spaces
        }
    }
};

// Highlight the current word in red
const highlightNextWord = () => {
    const wordElements = wordDisplay.children;

    if (currentWordIndex < wordElements.length) {
        if (currentWordIndex > 0) {
            wordElements[currentWordIndex - 1].style.color = "black";
        }
        wordElements[currentWordIndex].style.color = "red";
    }
};

// Event listeners
// Attach `updateWord` to `keydown` instead of `input`
inputField.addEventListener("keydown", (event) => {
    startTimer();
    updateWord(event);
});
modeSelect.addEventListener("change", () => startTest());

// Start the test
startTest();

// Ty ndray ary 
// mety ihany le izyg
