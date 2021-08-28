var side1 = document.querySelector(".first-side")
var side2 = document.querySelector(".second-side");
var button = document.querySelector(".button")
var message = document.querySelector(".message3");

function get_area(side1,side2){
    var first = Number(side1);
    var second = Number(side2);
    var area = (first*second)/2;
    return area;
}

function showmessage(){
    var hypotenus = get_area(side1.value,side2.value);
    message.innerText = "Area is "+hypotenus;
}

button.addEventListener("click",showmessage);