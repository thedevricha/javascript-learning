/* Project: Interactive Quiz Game 
- Create a command-line interface for the quiz game
- Implement multiple-choice questions about JavaScript
- Cover various JavaScript topics in the questions
- Keep track of the user's score throughout the game
- Provide feedback to the user on their performance
*/

const questions = [
    {
        question: "What is JavaScript?",
        options: ["A programming language", "A coffee brand", "A type of car"],
        correctAnswer: 0
    },
    {
        question: "Which variable once initialized we can not assign a new value?",
        options: ["let", "var", "const"],
        correctAnswer: 2
    },
    {
        question: "Which is a primitive datatype?",
        options: ["Object", "BigInt", "Array"],
        correctAnswer: 1
    },
    {
        question: "How many Logical operators are there in JavaScript?",
        options: ["3", "5", "2"],
        correctAnswer: 0
    },
    {
        question: "How many types of type conversion in JavaScript?",
        options: ["3", "4", "2"],
        correctAnswer: 2
    },
    {
        question: "Which method use for explicit conversion of digit?",
        options: ["int()", "parseInt()", "stringToInt()"],
        correctAnswer: 1
    },
];

let score = 0;
let currentQuestionIndex = 0;

function askQuestion(){
    const questionDetails = questions[currentQuestionIndex];
    const question = questionDetails['question'];
    const optionArray = questionDetails['options'];
    console.log(question);
    for(let option = 0; option < optionArray.length; option++){
        console.log(option +". "+ optionArray[option]);
    }
}

function checkAnswer(userAns){
    const questionDetails = questions[currentQuestionIndex];   
    if(userAns === questionDetails.correctAnswer){
        score++;
        console.log("Correct answer!");
    }else{
        console.log("Wrong answer! Correct option is " + questionDetails.correctAnswer);
    }
    currentQuestionIndex++;
}
function displayResult(){
    console.log("Your Score is: " + score+ "/" + questions.length);
}
function startQuiz(){
    console.log("== Interactive Quiz Game ==");
    while(currentQuestionIndex < questions.length){
        askQuestion();
        let userAns = parseInt(prompt("What's your answer?(Enter option number i.e. 0,1,2) "));

        // Check if the answer is valid
        if(isNaN(userAns) || userAns < 0 || userAns >= questions[currentQuestionIndex].options.length){
            console.log("Please enter valid option")
        }else{
            checkAnswer(userAns);
        }
    }
    displayResult();
}
startQuiz();