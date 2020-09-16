var element1 = document.getElementsByClassName("navi");
element1.classList.add("list");

var li = document.createElement("li");
var a = document.createElement("a");
li.appendChild(a);
a.href = "http://localhost:3000/";
a.textContent = "Localhost inside";
element1.appendChild(li);
