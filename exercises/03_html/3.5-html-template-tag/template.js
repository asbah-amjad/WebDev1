const contacts = document.getElementById("contacts");
var template = document.querySelector("#contact-template");
const form = document.querySelector("form");
var name = document.getElementById("input-name");
var email = document.getElementById("input-email");
var homepage = document.getElementById("input-homepage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //cloning
  var clone = template.content.cloneNode(true);
  let h2 = clone.querySelector("h2");
  let p1 = clone.querySelector("p.email");
  let p2 = clone.querySelector("p.homepage > a");
  //content replacement
  h2.innerText = name.value;
  p1.textContent = email.value;
  p2.href = homepage.value;
  p2.textContent = homepage.value;
  //append
  contacts.appendChild(clone);
  form.reset();
});
