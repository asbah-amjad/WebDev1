var count_str = 0; //default value

var paragraph = document.getElementById("counter");
var decrement = document.getElementById("decrement");
var reset = document.getElementById("reset");
var increment = document.getElementById("increment");
//for decrement button
decrement.addEventListener("click", myFunction);
function myFunction() {
  if (count_str == -5) {
    count_str = 5;
  } else {
    count_str--;
  }
  paragraph.innerHTML = count_str;
}
//for increment button
increment.addEventListener("click", myFunction1);
function myFunction1() {
  if (count_str == 5) {
    count_str = -5;
  } else {
    count_str++;
  }
  paragraph.innerHTML = count_str;
}
//for reset button
reset.addEventListener("click", myFunction2);
function myFunction2() {
  count_str = 0;
  paragraph.innerHTML = count_str;
}
