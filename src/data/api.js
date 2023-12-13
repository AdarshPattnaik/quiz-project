const data = [
    {
        id: 1,
        questionText: 'What is React?',
        answerOptions: [
            { answerText: 'Open-source JavaScript back-end library', isCorrect: false },
            { answerText: 'JavaScript front-end library to create a database', isCorrect: false },
            { answerText: 'Free and open-source JavaScript front-end library', isCorrect: true },
            { answerText: 'None of these', isCorrect: false },
        ],
    },
    {
        id: 2,
        questionText: 'Which of the following acts as the input of a class-based component?',
        answerOptions: [
            { answerText: 'Class', isCorrect: false },
            { answerText: 'Props', isCorrect: true },
            { answerText: 'Factory', isCorrect: false },
            { answerText: 'Context', isCorrect: false },
        ],
    },
    {
        id: 3,
        questionText: 'How many elements can a valid react component return?',
        answerOptions: [
            { answerText: 'React does not return element', isCorrect: false },
            { answerText: 'One', isCorrect: true },
            { answerText: 'More than one', isCorrect: false },
            { answerText: 'None of these', isCorrect: false },
        ],
    },
    {
        id: 4,
        questionText: 'In which of the following directory React Components are saved?',
        answerOptions: [
            { answerText: 'Inside js/components/', isCorrect: true },
            { answerText: 'Inside components/js/', isCorrect: false },
            { answerText: 'Inside vendor/js/components/', isCorrect: false },
            { answerText: 'Inside vendor/components/', isCorrect: false },
        ],
    },
    {
        id: 5,
        questionText: 'Which of the following is method is not a part of ReactDOM?',
        answerOptions: [
            { answerText: 'ReactDOM.hydrate()', isCorrect: false },
            { answerText: 'ReactDOM.destroy()', isCorrect: true },
            { answerText: 'ReactDOM.createPortal()', isCorrect: false },
            { answerText: 'All of the mentioned', isCorrect: false },
        ],
    },
];

export default data;