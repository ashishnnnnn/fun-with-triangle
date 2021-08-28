//Is Triangle

var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var button1 = document.querySelector(".is_triangle")
var message1 = document.querySelector(".message1");

button1.addEventListener("click",function is_triangle(){
    var ang1 = Number(angle1.value);
    var ang2 = Number(angle2.value);
    var ang3 = Number(angle3.value);
    var sum = ang1+ang2+ang3;
    if(sum===180){
        message1.style.color = 'green';
        message1.innerText = "Hurray!! You have got a triangle";
    }
    else{
        message1.style.color = 'red';
        message1.innerText = "Sorry this is not a triangle";
    }
})