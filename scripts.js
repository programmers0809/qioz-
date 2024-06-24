// dom in js 
// let withCllassnamet querSELecttor("h1");
// let withClassName= documet.qureySelector(".h1");
// let withClassName= documet.qureySelector(".#heading");
// withtagname.innertext="hello word "<buttun>ok<buttun>
// withtagname.innertext="hello word "<buttun>ok<buttun>
// let with
// let ul =document.qurerySelector("ul"?)
// function addChild(){
    // let li =document
// }

// let jjj
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const questionElement = quizContainer.querySelector('.question');
const optionsElement = quizContainer.querySelector('.options');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;
        input.id = `option${index}`;
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = option;
        li.appendChild(input);
        li.appendChild(label);
        optionsElement.appendChild(li);
    });
}

function getSelectedOption() {
    const selectedOption = optionsElement.querySelector('input[name="option"]:checked');
    return selectedOption ? selectedOption.value : null;
}

function showNextQuestion() {
    const selectedOption = getSelectedOption();
    if (selectedOption === null) {
        alert('Please select an option!');
        return;
    }
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        quizContainer.style.display = 'none';
        submitButton.style.display = 'none';
        resultElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
    }
}

nextButton.addEventListener('click', showNextQuestion);

submitButton.addEventListener('click', () => {
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
});

showQuestion(currentQuestionIndex);
