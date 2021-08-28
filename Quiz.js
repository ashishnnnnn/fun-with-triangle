var quizform = document.querySelector(".quiz-form");
var submit_answer = document.querySelector("#submit-answer-btn");
var messgae2 = document.querySelector(".message2");

var correct_answer = ["90","right angled","one right angle","12 16 20","Equilateral triangle","85","40"]

function calulate_score(){
    var score = 0;
    var index = 0;
    var form_result = new FormData(quizform);
    for(let value of form_result.values()){
        if(value===correct_answer[index]){
            score+=1;
            index+=1;
        }
        else{
            index+=1;
        }
    }
    messgae2.innerText = "Your Score is "+ score;
}

submit_answer.addEventListener('click',calulate_score)