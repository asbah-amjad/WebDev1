//loop over li

for (let li of document.querySelectorAll("li")) {
  //get the descendants count

  let count = li.getElementsByTagName("li").length;
  li.innerHTML += "(" + count + ")";
  //li.firstElementChild.innerHTML += "(" + count + ")";
}

//document.getElementsByTagName("li").childElementCount
