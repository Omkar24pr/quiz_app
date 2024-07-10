
const allQuestions = [
    {question: 'Which is the largest animal in the world?',
        answer: [
            {text: 'Shark', correct: false},
            {text: 'Blue whale', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Giraffe', correct: false},
        ]
    },
    {question: 'Which is the largest desert in the world?',
        answer: [
            {text: 'Kalahari', correct: false},
            {text: 'Gobi', correct: false},
            {text: 'Sahara', correct: false},
            {text: 'Antarctica', correct: true},
        ]
    },
    {question: 'Which is the smallest continent in the world?',
        answer: [
            {text: 'Asia', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Arctic', correct: false},
            {text: 'Africa', correct: false},
        ]
    },
    {question: 'Which is the smallest country in the world?',
        answer: [
            {text: 'Vatican City', correct: true},
            {text: 'Bhutan', correct: false},
            {text: 'Nepal', correct: false},
            {text: 'Sri Lanka', correct: false},
        ]
    },
    {question: 'Which is the largest river in the world?',
        answer: [
            {text: 'Ganga', correct: false},
            {text: 'Mahanadi', correct: false},
            {text: 'Nile', correct: true},
            {text: 'Amazon', correct: false},
        ]
    },
    {question: 'Which planet is known as the Red Planet?',
        answer: [
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false},
        ]
    },
    {question: 'Which is the largest ocean in the world?',
        answer: [
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Arctic Ocean', correct: false},
            {text: 'Pacific Ocean', correct: true},
        ]
    },
    {question: 'Which is the tallest mountain in the world?',
        answer: [
            {text: 'K2', correct: false},
            {text: 'Kangchenjunga', correct: false},
            {text: 'Lhotse', correct: false},
            {text: 'Mount Everest', correct: true},
        ]
    },
    {question: 'Which country is known as the Land of the Rising Sun?',
        answer: [
            {text: 'China', correct: false},
            {text: 'Japan', correct: true},
            {text: 'Korea', correct: false},
            {text: 'Thailand', correct: false},
        ]
    },
    {question: 'Which is the largest planet in the solar system?',
        answer: [
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: false},
            {text: 'Jupiter', correct: true},
            {text: 'Saturn', correct: false},
        ]
    },
    {question: 'Which is the fastest land animal?',
        answer: [
            {text: 'Lion', correct: false},
            {text: 'Cheetah', correct: true},
            {text: 'Tiger', correct: false},
            {text: 'Leopard', correct: false},
        ]
    },
    {question: 'Which is the longest river in the world?',
        answer: [
            {text: 'Nile', correct: true},
            {text: 'Amazon', correct: false},
            {text: 'Yangtze', correct: false},
            {text: 'Mississippi', correct: false},
        ]
    },
    {question: 'Which country has the most population?',
        answer: [
            {text: 'India', correct: false},
            {text: 'USA', correct: false},
            {text: 'China', correct: true},
            {text: 'Indonesia', correct: false},
        ]
    },
    {question: 'Which is the smallest ocean in the world?',
        answer: [
            {text: 'Atlantic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Southern Ocean', correct: false},
            {text: 'Arctic Ocean', correct: true},
        ]
    },
    {question: 'Which continent has the most countries?',
        answer: [
            {text: 'Asia', correct: false},
            {text: 'Africa', correct: true},
            {text: 'Europe', correct: false},
            {text: 'South America', correct: false},
        ]
    },
    {question: 'What is the largest lake in the world?',
        answer: [
            {text: 'Caspian Sea', correct: false},
            {text: 'Baikal', correct: true},
            {text: 'Lake Superior', correct: false},
            {text: 'Ontario', correct: false},
        ]
    },
    {question: 'Which planet in the solar system is known as the "Red Planet"?',
        answer: [
            {text: 'Venus', correct: false},
            {text: 'Earth', correct: false},
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
        ]
    },
    {question: 'What is the capital of Japan?',
        answer: [
            {text: 'Beijing', correct: false},
            {text: 'Tokyo', correct: true},
            {text: 'Seoul', correct: false},
            {text: 'Bangkok', correct: false},
        ]
    },
    {question: 'What gas is used to extinguish fires?',
        answer: [
            {text: 'Oxygen', correct: false},
            {text: 'Nitrogen', correct: false},
            {text: 'Carbon dioxide', correct: true},
            {text: 'Hydrogen', correct: false},
        ]
    },
    {question: 'Which of the following planets is not a gas giant?',
        answer: [
            {text: 'Mars', correct: true},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false},
            {text: 'Uranus', correct: false},
        ]
    },
    {question: 'What is the name of the process by which plants convert sunlight into energy?',
        answer: [
            {text: 'Respiration', correct: false},
            {text: 'Photosynthesis', correct: true},
            {text: 'Oxidation', correct: false},
            {text: 'Evolution', correct: false},
        ]
    },
    {question: 'What chemical element is designated as "Hg"?',
        answer: [
            {text: 'Silver', correct: false},
            {text: 'Tin', correct: false},
            {text: 'Copper', correct: false},
            {text: 'Mercury', correct: true},
        ]
    },
    {question: 'For which of these disciplines is the Nobel Prize awarded?',
        answer: [
            {text: 'Physics, Chemistry', correct: false},
            {text: 'Physiology', correct: false},
            {text: 'Medicine', correct: false},
            {text: 'All of the above', correct: true},
        ]
    },
    {question: 'Hitler\'s party is known as:',
        answer: [
            {text: 'Labour Party', correct: false},
            {text: 'Nazi Party', correct: true},
            {text: 'Ku-Klux-Klan', correct: false},
            {text: 'Democratic Party', correct: false},
        ]
    },
    {question: 'For which is Galileo famous?',
        answer: [
            {text: 'Developed the telescope', correct: false},
            {text: 'Discovered four satellites of Jupiter', correct: false},
            {text: 'Found that the swinging motion of the pendulum results in consistent time measurement.', correct: false},
            {text: 'All of the above', correct: true},
        ]
    },
    {question: 'Which is the largest island?',
        answer: [
            {text: 'New Guinea', correct: false},
            {text: 'Andaman Nicobar', correct: false},
            {text: 'Greenland', correct: true},
            {text: 'Hawaii', correct: false},
        ]
    },
    {question: 'Which one is the hottest continent?',
        answer: [
            {text: 'Africa', correct: true},
            {text: 'South Asia', correct: false},
            {text: 'North America', correct: false},
            {text: 'Australia', correct: false},
        ]
    },
    {question: 'What is the official currency of Japan?',
        answer: [
            {text: 'Won', correct: false},
            {text: 'Yuan', correct: false},
            {text: 'Yen', correct: true},
            {text: 'Dollars', correct: false},
        ]
    },
    {question: 'What is considered the lung of the Earth?',
        answer: [
            {text: 'Amazon rainforest', correct: true},
            {text: 'The Mississippi River', correct: false},
            {text: 'The Sahara', correct: false},
            {text: 'Everest', correct: false},
        ]
    },
    {question: 'Where does the Sushi come from?',
        answer: [
            {text: 'Japan', correct: true},
            {text: 'China', correct: false},
            {text: 'America', correct: false},
            {text: 'South Korea', correct: false},
        ]
    },
    {question: 'Which is the richest country in the world?',
        answer: [
            {text: 'Qatar', correct: true},
            {text: 'Russia', correct: false},
            {text: 'The USA', correct: false},
            {text: 'The UAE', correct: false},
        ]
    },
    {question: 'Which country is the biggest grower of coffee?',
        answer: [
            {text: 'Spain', correct: false},
            {text: 'India', correct: false},
            {text: 'Ethiopia', correct: false},
            {text: 'Brazil', correct: true},
        ]
    }
];

// Function to select 7 random questions from the list
function getRandomQuestions(allQuestions) {
    let questions = [];
    let usedIndexes = new Set();
    
    while (questions.length < 7) {
        let index = Math.floor(Math.random() * allQuestions.length);
        if (!usedIndexes.has(index)) {
            questions.push(allQuestions[index]);
            usedIndexes.add(index);
        }
    }
    return questions;
}

const questions = getRandomQuestions(allQuestions);

const questionElement = document.getElementById('question');

// The getElementById() method returns an element with a specified value.
// The getElementById() method returns null if the element does not exist.
// The getElementById() method is one of the most common methods in the HTML DOM. 
// It is used almost every time you want to read or edit an HTML element

// Note
// Any id should be unique, but:
// If two or more elements with the same id exist, getElementById() returns the first.


const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timeElement = document.getElementById('timer');


let currentQuestionIndex = 0;
let score = 0;
let time;
const total_time= 15;
let sec = total_time;

function timer(){
    timeElement.innerHTML = sec;   //set sec variable the to html
    sec--;
    if(sec<0){
        sec= total_time;
        clearInterval(time);   // clear the time interval
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else {
            showScore();
        }
    }
}


function startQUiz(){
    currentQuestionIndex =0;
    score= 0;
    nextButton.innerHTML = 'Next' ;   // the innerHTML property sets or returns the HTML content (inner HTML) of an element or set the innerhtml property of the nextbutton to next
   
    showQuestion();    //calling the showquestion
}

function showQuestion(){
    
    sec= total_time;   // assign sec to total timer of timer
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + '.'+ currentQuestion.
    question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');  //it create a button tag and we named as button
        button.innerHTML = answer.text;    // innerHtml is used to add text by answer.text
        button.classList.add('btn');       // adding  classname here btn by class list
        answerButtons.appendChild(button);  //adding the button tag in  answerbutton so we use this
        if(answer.correct){
             button.dataset.correct = answer.correct ; //it will add true or false in the datasetcorrect
        }
        button.addEventListener('click',selectAnswer);   // when we click on answer button it will call the function selectanswer 


        // The createElement method is a part of the Document Object Model (DOM) API provided by web browsers.
        //  It allows developers to dynamically create new HTML elements, such as 'span', 'p', 'img', 'table', etc. Once created,
        //   these elements can be manipulated using JavaScript and styled with CSS before being inserted
        //    into the document, allowing for an interactive and dynamic user experience.
    

        // The classList property returns the CSS classnames of an element.
   
        // The addEventListener() method of the EventTarget interface sets up a function 
        // that will be called whenever the specified event is delivered to the target.
        //jab click kare to work kare

    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);  //it will remove all the previous answer(i mean intro page)
    }

}

function selectAnswer(e){
    const selectionbtn = e.target;
    const iscorrect = selectionbtn.dataset.correct ==='true';
    if(iscorrect){
        selectionbtn.classList.add('correct');
        score++;  //increase score by one
    }
    else{
        selectionbtn.classList.add('Incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==='true'){
            button.classList.add('correct');
        }
        button.disabled =true;
    });
    nextButton.style.display = 'block';   // it allow only one click .
}

function showScore(){
    clearInterval(time);
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}


function handlNextButton(){
    currentQuestionIndex++;  //increase by 1
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener('click',() =>{
    if(currentQuestionIndex < questions.length){
        handlNextButton();
    }
    else{
        startQUiz();
    }
})

startQUiz();  // call the function to start quiz










