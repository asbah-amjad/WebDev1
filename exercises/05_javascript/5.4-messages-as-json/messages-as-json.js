var contacts = document.getElementById("contacts");
var template = document.querySelector("#user-card-template");
//listen to custom event
document.addEventListener("userDataReady", function (e) {
  var value = e.detail.jsonText;
  var obj = JSON.parse(value);

  for (var i = 0; i < obj.length; i++) {
    //cloning
    var clone = template.content.cloneNode(true);
    let img = clone.querySelector("div.card > img");
    let h1 = clone.querySelector("div.card > h1");
    let email = clone.querySelector("div.card > p");
    let phone = clone.querySelector("p.phone > span");
    let address = clone.querySelector(".address");
    let streetAddress = address.querySelectorAll("p")[0];
    let zipCode_City = address.querySelectorAll("p")[1];
    let country = address.querySelectorAll("p")[2];
    let homepage = clone.querySelector("p.homepage > a");
    //replacement
    img.src = obj[i].avatar;
    img.alt = obj[i].firstName + " " + obj[i].lastName;
    h1.textContent = obj[i].firstName + " " + obj[i].lastName;
    email.textContent = obj[i].email;
    phone.textContent = obj[i].phoneNumber;
    streetAddress.textContent = obj[i].address.streetAddress;
    zipCode_City.textContent =
      obj[i].address.zipCode + " " + obj[i].address.city;
    country.textContent = obj[i].address.country;
    homepage.href = obj[i].homepage;

    //append
    contacts.appendChild(clone);
  }
});

fetchUserData();
