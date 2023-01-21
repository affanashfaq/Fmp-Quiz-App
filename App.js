var questions = [
    {
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },   
  ];

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var question = document.getElementById("question");
var answerParent = document.getElementById("answerParent");
var indexNum = 0
var score = 0

 function renderQuestion(){
    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length
    var obj = questions[indexNum]
    question.innerHTML = obj.question
    answerParent.innerHTML = ''
    for(var i =0; i<obj.options.length; i++){
        answerParent.innerHTML += `<div class="col-md-6">
        <div class="py-2">
         <button onclick="checkQuestion('${obj.options[i]}','${obj.answer}')" class="btn btn-dark rounded-pill w-100 shadow">${obj.options[i]}</button>
        </div>
    </div>`
    };

 }; 
 renderQuestion()


 function nextQuestion(){
    indexNum++
 renderQuestion()

 }

function checkQuestion(a,b){
    if(a == b){
        score++
        console.log(score)
    }
    nextQuestion()
}