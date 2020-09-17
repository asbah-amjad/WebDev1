var element1 = document.getElementsByClassName("navi");
element1.classList.add("list");

var li = document.createElement("li");
var a = document.createElement("a");
a.href = "http://localhost:3000/";
a.text = "Localhost inside";
li.appendChild(a);
element1.appendChild(li);

var li1 = document.createElement("li");
//li1.innerHTML = "Item 0";
const newContent = document.createTextNode("Item 0");
li1.appendChild(newContent);
document.getElementById("ordered")[0] = li1;

var element2 = document.getElementById("todo");
element2.classList.remove("navi");

var child = element2.children;
element2.removeChild(child[1]);
