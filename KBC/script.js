let questions = [
    {
        question: "What does CSS stands for?",
        options: {a:"Computing Style Sheet", b:"Cascading Style Sheet", c: "Creative Style Sheet", d:"Creative Styling Sheet"},
        correctAnswer: "b",
        prize:1000
    }
   /* {
        question: "What does HTML stand for?",
        options: {a:"Hyper Text Preprocessor",b: "Hyper Text Markup Language",c: "Hyper Text Multiple Language",d: "Hyper Tool Multi Language"},
        correctAnswer: "b",
        prize:1000
    }
    {
        question: "How to print a page using Javascript?",
        options: ["window.print()", "browser.print()", "navigator.print()", "document.print()"],
        answer: "window.print()"
    },
    {
        question: "Which language runs on a web browser?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: " How do you declare a javascript variable ?",
        options: ["variable carName;", "var carName;", "v carName;", "none of this"],
        answer: "var carName;"
    },
    {
        question: "How do you called a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()"],
        answer: "myFunction()"
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World")', 'alertBox("helloWorld")', 'msg("Hello World")', 'msgBox("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: "What is the most used programming language in 2021?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "When JS develope?",
        options: ["1990", "1995", "1999", "1892"],
        answer: "1995"
    },
    {
        question: "Which of the following is not Css Box model property?",
        options: ["margin", "padding", "border-radius", "border-collapse"],
        correctAnswer: "border-collapse",
        prize:1000
    }*/

    
];
// console.log(questions[0].question)

let currentQuestionIndex = 0;
let timer;
let timeLeft = 30;
let prizeAmount = 0;

function startGame() {
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    let options = question.options;
    document.querySelector('.option:nth-child(1)').innerText = 'A: ' + options.a;
    document.querySelector('.option:nth-child(2)').innerText = 'B: ' + options.b;
    document.querySelector('.option:nth-child(3)').innerText = 'C: ' + options.c;
    document.querySelector('.option:nth-child(4)').innerText = 'D: ' + options.d;
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);

            alert("Time's up! The correct answer was " + questions[currentQuestionIndex].correctAnswer);
            // Move to the next question or end game
            nextQuestion();
        }
    }, 1000);
}

function submitAnswer(answer) {
    clearInterval(timer);
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        prizeAmount = questions[currentQuestionIndex].prize;
        document.getElementById('answer').play();
        document.getElementById('prizeAmount').innerText = prizeAmount;
        alert("Correct answer! You've won " + prizeAmount);
    } else {
        alert("Wrong answer! The correct answer was " + correctAnswer);
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        startTimer();
    } else {
        alert("Congratulations! You've completed the game.");
        // Optionally reset the game or display final prize
    }
}

// Initialize game
// startGame();