var viewHighscores = document.querySelector("#view-highscores");
var secondsDisplay = document.querySelector("#seconds");
var timeLabel = document.querySelector(".time");
var container = document.querySelector(".container");
var headerDisplay = document.querySelector("#header");
var quizInstructions = document.querySelector("#quiz-instructions");
var startButton = document.querySelector("#start-quiz");

var interval;
var seconds = 75;
var quizQuestion;
var optionOneBtn;
var optionTwoBtn;
var optionThreeBtn;
var optionFourBtn;
var line;
var correctAnswer;
var incorrectAnswer;
var scoreMessage;
var label;
var input;
var submitButton;
var highScoresList;
var goBackBtn;
var clearHsBtn;
var score = 100;
var user; 

function startTimer(){

    firstQuestion();

    interval = setInterval(function() {
        seconds--;
        secondsDisplay.textContent = seconds;
        if(seconds == 0){
            clearInterval(interval);
        }
    }, 1000);
}

function firstQuestion(){
    removeQuizIntro();
    createQuestionElements();
    quizQuestion.innerHTML = "Where in the HTML file should a JavaScript link be placed?";
    optionOneBtn.innerHTML = "1. Top";
    optionTwoBtn.innerHTML = "2. Middle";
    optionThreeBtn.innerHTML = "3. Bottom";
    optionFourBtn.innerHTML = "4. Right";
    optionOneBtn.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionTwoBtn.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionThreeBtn.onclick = function(){
        secondQuestion();
        createLine();
        correctAns();
    }
    optionFourBtn.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function secondQuestion(){
    quizQuestion.innerHTML = "In JavaScript, what is a block of code used to perform a particular task called?";
    optionOneBtn.innerHTML = "1. Function";
    optionTwoBtn.innerHTML = "2. Array";
    optionThreeBtn.innerHTML = "3. Element";
    optionFourBtn.innerHTML = "4. Button";
    removeAns();
    optionOneBtn.onclick = function(){
        thirdQuestion();
        createLine();
        correctAns();
    }
    optionTwoBtn.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionThreeBtn.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionFourBtn.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function thirdQuestion(){
    quizQuestion.innerHTML = "In JavaScript, what is the correct method to share something with a user?";
    optionOneBtn.innerHTML = "1. Prompt";
    optionTwoBtn.innerHTML = "2. Alert";
    optionThreeBtn.innerHTML = "3. Confirm";
    optionFourBtn.innerHTML = "4. Siren";
    removeAns();
    optionOneBtn.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionTwoBtn.onclick = function(){
        fourthQuestion();
        createLine();
        correctAns();
    }
    optionThreeBtn.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionFourBtn.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function fourthQuestion(){
    quizQuestion.innerHTML = "How do you declare a variable in JavaScript?";
    optionOneBtn.innerHTML = "1. variable newVariable; ";
    optionTwoBtn.innerHTML = "2. va Newvariable; ";
    optionThreeBtn.innerHTML = "3. v newVariable; ";
    optionFourBtn.innerHTML = "4. var newVariable; ";
    removeAns();
    optionOneBtn.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionTwoBtn.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionThreeBtn.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionFourBtn.onclick = function(){
        fifthQuestion();
        createLine();
        correctAns();
    }
}

function fifthQuestion(){
    quizQuestion.innerHTML = "In Javascript, how do you capture an event triggered by the user?";
    optionOneBtn.innerHTML = "1. Alert";
    optionTwoBtn.innerHTML = "2. For loop";
    optionThreeBtn.innerHTML = "3. Event listener";
    optionFourBtn.innerHTML = "4. While loop";
    removeAns();
    optionOneBtn.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionTwoBtn.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    optionThreeBtn.onclick = function(){
        allDone();
        createLine();
        correctAns();
    }
    optionFourBtn.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function allDone(){
    
    removeQuizBtns();
    removeAns();
    createAllDoneElements();
    quizQuestion.innerHTML = "All done!";
    scoreMessage.textContent = "Your final score is " + score;
    label.textContent = "Enter Initials: ";
    submitButton.innerHTML = "Submit";
    submitButton.onclick = function(){
        highScores();
    }
}

function highScores(){
    viewHighscores.style.visibility = "hidden";
    secondsDisplay.style.visibility = "hidden";
    timeLabel.style.visibility = "hidden";
    scoreMessage.remove();
    label.remove();
    input.remove();
    submitButton.remove();
    quizQuestion.innerHTML = "Highscores";
    highScoresList = document.createElement("ol");
    highScoresList.style.backgroundColor = "violet";
    container.appendChild(highScoresList);
    var scoreItem = document.createElement("li");
    scoreItem.textContent = "JG - 22"; 
    highScoresList.appendChild(scoreItem);
    goBackBtn = document.createElement("button");
    goBackBtn.innerHTML = "Go Back";
    goBackBtn.style.display = "inline";
    goBackBtn.style.marginRight = "5px";
    container.appendChild(goBackBtn);
    clearHsBtn = document.createElement("button");
    clearHsBtn.innerHTML = "Clear Highscores";
    clearHsBtn.style.display = "inline";
    container.appendChild(clearHsBtn);
    goBackBtn.onclick = function(){
        goBack();
        resetTimer();
    }
}

function goBack(){
    quizQuestion.remove();
    highScoresList.remove();
    goBackBtn.remove();
    clearHsBtn.remove();
    viewHighscores.style.visibility = "visible";
    secondsDisplay.style.visibility = "visible";
    timeLabel.style.visibility = "visible";
    headerDisplay.style.display = "block";
    quizInstructions.style.display = "block";
    startButton.style.display = "block"; 
}

function removeQuizIntro(){
    headerDisplay.style.display = "none";
    quizInstructions.style.display = "none";
    startButton.style.display = "none";
}

function createQuestionElements(){
    quizQuestion = document.createElement("h2");
    container.appendChild(quizQuestion);
    optionOneBtn = document.createElement("button");
    container.appendChild(optionOneBtn);
    optionTwoBtn = document.createElement("button");
    container.appendChild(optionTwoBtn);
    optionThreeBtn = document.createElement("button");
    container.appendChild(optionThreeBtn);
    optionFourBtn = document.createElement("button");
    container.appendChild(optionFourBtn);
}

function createLine(){
    line = document.createElement("hr");
    container.appendChild(line);
}

function removeAns(){ 
    setTimeout(() => {
        line.remove();
        correctAnswer.remove();
        incorrectAnswer.remove();
    }, 1000)
    
}

function correctAns(){
    correctAnswer = document.createElement("p");
    correctAnswer.textContent = "Correct!";
    container.appendChild(correctAnswer);
}

function wrongAns(){
    incorrectAnswer = document.createElement("p");
    incorrectAnswer.textContent = "Wrong!";
    container.appendChild(incorrectAnswer);
}

function deductTime(){
    seconds = seconds - 10;
}

function deductScore(){
    score = score - 20;
}

function resetTimer(){
    seconds = 75;
}

function removeQuizBtns(){
    optionOneBtn.remove();
    optionTwoBtn.remove();
    optionThreeBtn.remove();
    optionFourBtn.remove();
}

function createAllDoneElements(){
    scoreMessage = document.createElement("p");
    container.appendChild(scoreMessage);
    label = document.createElement("label");
    container.appendChild(label);
    input = document.createElement("input");
    container.appendChild(input);
    submitButton = document.createElement("button");
    submitButton.style.display = "inline";
    submitButton.style.marginLeft = "5px";
    container.appendChild(submitButton);
}

startButton.addEventListener("click", startTimer);