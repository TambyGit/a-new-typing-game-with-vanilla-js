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
    initializeEventListeners() {
        this.elements.input.addEventListener('input', this.handleInput.bind(this));
        this.elements.restart.addEventListener('click', this.startGame.bind(this));
        this.elements.themeToggle.addEventListener('click', this.toggleTheme.bind(this));
        this.elements.settingsButton.addEventListener('click', () => {
            this.elements.settingsModal.classList.add('active');
        });
        this.elements.closeSettings.addEventListener('click', () => {
            this.elements.settingsModal.classList.remove('active');
        });
        this.elements.settingsModal.addEventListener('click', (e) => {
            if (e.target === this.elements.settingsModal) {
                this.elements.settingsModal.classList.remove('active');
            }
        });
        this.elements.wordCount.addEventListener('change', () => {
            this.generateWords();
            this.updateStats();
        });
        this.elements.difficulty.addEventListener('change', () => {
            this.generateWords();
            this.updateStats();
        });
        this.elements.timeLimit.addEventListener('change', () => {
            this.timeLeft = parseInt(this.elements.timeLimit.value);
            this.updateTimerDisplay();
            if (!this.isActive) { // Reset le timer visuel si le test n'est pas en cours
                this.elements.timer.textContent = this.timeLeft + 's';
            }
        });
        this.elements.language.addEventListener('change', () => {
            this.currentLanguage = this.elements.language.value;
            this.generateWords();
            this.updateStats();
            this.updateLanguageTexts();
        });
    }
    updateLanguageTexts() {
        const lang = this.currentLanguage;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        const difficultySelect = this.elements.difficulty;
        difficultySelect.querySelectorAll('option').forEach(option => {
            const val = option.value;
            if (translations[lang][val]) {
                option.textContent = translations[lang][val];
            }
        });
    }

    initializeTheme() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        this.elements.themeToggle.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }

    toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        this.elements.themeToggle.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', !isDark);
    }
    generateWords() {
        const count = parseInt(this.elements.wordCount.value);
        const difficulty = this.elements.difficulty.value;
        let filteredWords = [...wordLists[this.currentLanguage]];

        if (difficulty === 'easy') {
            filteredWords = filteredWords.filter(word => word.length <= 5);
        } else if (difficulty === 'medium') {
            filteredWords = filteredWords.filter(word => word.length >= 6 && word.length <= 9);
        } else if (difficulty === 'hard') {
            filteredWords = filteredWords.filter(word => word.length >= 9 && word.length <= 17);
        }

        this.words = filteredWords
            .sort(() => 0.5 - Math.random())
            .slice(0, count);

        this.renderWords();
    }
    renderWords() {
        this.elements.wordsContainer.innerHTML = this.words
            .map((word, i) => {
                let classes = ['word'];
                if (i === this.currentWordIndex) classes.push('current');
                if (i < this.currentWordIndex) classes.push('completed');
                if (this.wordErrors[i]) classes.push('error');
                return `<span class="${classes.join(' ')}">${word}</span>`;
            })
            .join('');
    }
    startGame() {
        this.isActive = false;
        this.currentWordIndex = 0;
        this.timeLeft = parseInt(this.elements.timeLimit.value);
        this.updateTimerDisplay(); // Réinitialise l'affichage du timer
        this.stats = { wpm: 0, accuracy: 0, completed: 0, errors: 0 };
        this.wordErrors = [];
        this.generateWords();
        this.updateStats();
        this.elements.input.value = '';
        this.elements.input.disabled = false;
        this.elements.input.focus();
        this.elements.uiContainer.classList.remove('hidden-during-test');
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }