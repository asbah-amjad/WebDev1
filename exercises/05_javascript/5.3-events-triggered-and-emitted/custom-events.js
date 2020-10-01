var roll1 = 0,
  roll2 = 0,
  roll3 = 0,
  roll4 = 0,
  roll5 = 0,
  roll6 = 0,
  total = 0;
//counters to update
var ones = document.querySelector("#ones > p");
var twos = document.querySelector("#twos > p");
var threes = document.querySelector("#threes > p");
var fours = document.querySelector("#fours > p");
var fives = document.querySelector("#fives > p");
var sixes = document.querySelector("#sixes > p");
var totals = document.querySelector("#totals > p > span");
//button to update
var roll_button = document.getElementById("roll-button");
//var buttonValue = document.querySelector("#roll-button > span");
//button template
var template1 = document.getElementById("template1").innerHTML;
var template2 = document.getElementById("template2").innerHTML;
var template3 = document.getElementById("template3").innerHTML;
var template4 = document.getElementById("template4").innerHTML;
var template5 = document.getElementById("template5").innerHTML;
var template6 = document.getElementById("template6").innerHTML;

//listen to the click event
roll_button.addEventListener("click", function () {
  rollDice();
});

//listen to custom rollDice event
document.addEventListener("rollDice", function (e) {
  var value = e.detail.value;
  if (value === 1) {
    roll_button.innerHTML = template1;
    roll1++;
  }
  if (value === 2) {
    roll_button.innerHTML = template2;
    roll2++;
  }
  if (value === 3) {
    roll_button.innerHTML = template3;
    roll3++;
  }
  if (value === 4) {
    roll_button.innerHTML = template4;
    roll4++;
  }
  if (value === 5) {
    roll_button.innerHTML = template5;
    roll5++;
  }
  if (value === 6) {
    roll_button.innerHTML = template6;
    roll6++;
  }
  total++;
  ones.textContent = roll1;
  twos.textContent = roll2;
  threes.textContent = roll3;
  fours.textContent = roll4;
  fives.textContent = roll5;
  sixes.textContent = roll6;
  totals.textContent = total;
  //console.log(value);
  //console.log(roll1);
});
