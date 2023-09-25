const form = document.querySelector("form");
const submit = document.querySelector("button");
const input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");

form.addEventListener("submit", formValidation);
submit.addEventListener("click", formValidation);

function emailTest(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function formValidation(event) {
  const firstName = input[0].value.trim();
  const lastName = input[1].value.trim();
  const email = input[2].value.trim();
  const password = input[3].value.trim();
  if (firstName === "") {
    event.preventDefault();
    error[0].style.display = "block";
    input[0].style.borderColor = "#ff7a7a";
  } else {
    error[0].style.display = "none";
    input[0].style.borderColor = "#e4e2e2";
  }
  if (lastName === "") {
    event.preventDefault();
    error[1].style.display = "block";
    input[1].style.borderColor = "#ff7a7a";
  } else {
    error[1].style.display = "none";
    input[1].style.borderColor = "#e4e2e2";
  }
  if (!emailTest(email)) {
    event.preventDefault();
    error[2].style.display = "block";
    input[2].style.borderColor = "#ff7a7a";
  } else {
    error[2].style.display = "none";
    input[2].style.borderColor = "#e4e2e2";
  }
  if (password === "") {
    event.preventDefault();
    error[3].style.display = "block";
    input[3].style.borderColor = "#ff7a7a";
  } else {
    error[3].style.display = "none";
    input[3].style.borderColor = "#e4e2e2";
  }
}
