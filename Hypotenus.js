var side1 = document.querySelector(".first-side")
var side2 = document.querySelector(".second-side");
var button = document.querySelector(".button")
var message = document.querySelector(".message3");

function get_hypotenus(side1,side2){
    var first = Number(side1);
    var second = Number(side2);
    var hypotenus = Math.sqrt((first*first) + (second*second));
    return hypotenus;
}

function showmessage(){
    var hypotenus = get_hypotenus(side1.value,side2.value);
    message.innerText = "Hypotenus is "+hypotenus;
}

button.addEventListener("click",showmessage);