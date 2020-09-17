//var element1 = document.getElementsByClassName("navi");
var element1 = document.querySelector("nav > ul");
element1.classList.add("list");

var li = document.createElement("li");
var a = document.createElement("a");
a.href = "http://localhost:3000/";
a.textContent = "Localhost";
li.appendChild(a);
element1.appendChild(li);

var li1 = document.createElement("li");
//li1.innerHTML = "Item 0";
li1.textContent = "Item 0";
var ol = document.querySelector("ol");
ol.insertBefore(li1, ol.childNodes[0]);

var element2 = document.getElementById("todo");
element2.classList.remove("navi");

var child = element2.children;
element2.removeChild(child[1]);
