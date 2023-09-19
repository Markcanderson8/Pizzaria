const submitButton = document
  .getElementById("submitButton")
  .addEventListener("click", submit);

const cancelButton = document
  .getElementById("cancelButton")
  .addEventListener("click", cancel);

const username = document.getElementById("username");
const password = document.getElementById("password");
let user = "mark777";
let pass = "test";

function submit(e) {
  e.preventDefault();
  if (validateUser(user) && validatePass(pass)) {
    console.log("access granted");
    window.location.replace("/pages/Home.html");
  } else {
    console.log("access denied");
  }
}

function cancel(e) {
  e.preventDefault();
  username.value = "";
  password.value = "";
}

function validateUser(user) {
  if (user === username.value) {
    return true;
  }
  return false;
}

function validatePass(pass) {
  if (pass === password.value) {
    return true;
  }
  return false;
}
