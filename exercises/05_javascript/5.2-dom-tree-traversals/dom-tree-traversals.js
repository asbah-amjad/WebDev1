//loop over li

for (let li of document.querySelectorAll("li")) {
  //get the descendants count

  let count = li.getElementsByTagName("li").length;
  let y = "(" + count + ")";

  if (count > 0) {
    li.firstChild.textContent += y;
  }
}
