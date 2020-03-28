document.getElementsByClassName("img-submit")[0].addEventListener("click", function(event) {

  event.preventDefault();

  var emailInput = document.querySelector(".form-email").value;
  var element = document.getElementById("err");
  if (!(verifyEmail(emailInput))) {

    element.classList.remove("err-img-off");
    element.classList.add("err-img-on");
    document.getElementById("last-statement").innerHTML="Please provide a valid email.";
  } else {

    element.classList.remove("err-img-on");
    element.classList.add("err-img-off");
    document.getElementById("last-statement").innerHTML="Thanks for submitting.";
  }
});

function verifyEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
