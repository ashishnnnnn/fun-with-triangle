var side1 = document.querySelector(".first-side")
var side2 = document.querySelector(".second-side");
var side3 = document.querySelector(".third-side");
var button = document.querySelector(".button")
var message = document.querySelector(".message3");

function get_area(side1,side2,side3){
    var first = Number(side1);
    var second = Number(side2);
    var third = Number(side3);
    // console.log(first,second,third);
    var semi_peri = (first+second+third)/2;
    var temp = semi_peri*(semi_peri-first)*(semi_peri-second)*(semi_peri-third);
    return Math.sqrt(temp);
}

function showmessage(){
    var area = get_area(side1.value,side2.value,side3.value);
    message.innerText = "Area is "+area;
}

button.addEventListener("click",showmessage);