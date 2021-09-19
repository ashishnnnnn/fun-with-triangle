var side1 = document.querySelector(".first-side");
var side2 = document.querySelector(".second-side");
var button = document.querySelector(".button");
var message = document.querySelector(".message3");

function get_message(side1, side2) {
  var first = Number(side1);
  var second = Number(side2);
  var sum = first + second;
  if (side1 == "" || side2 == "") {
    return "Please fill the above input value";
  }
  if (first <= 0 || second <= 0) {
    return "Please Enter Positive Values as side";
  }
  var hypotenus = Math.sqrt(first * first + second * second);
  return "Hypotenus is " + hypotenus;
}

function showmessage() {
  var recieved_mess = get_message(side1.value, side2.value);
  message.innerText = recieved_mess;
}

button.addEventListener("click", showmessage);
