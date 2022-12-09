let emailSelector = document.querySelector(".email");
let phoneSelector = document.querySelector(".phone");
let postSelector = document.querySelector(".post");
emailSelector.addEventListener("click", validate);
phoneSelector.addEventListener("click", validate);
postSelector.addEventListener("click", validate);
function validate(e) {
  let userInput;
  // console.log(e.target);
  if (e.target.classList.contains("email")) {
    let regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    userInput = prompt("Please enter an email: ");
    if (regexEmail.test(userInput)) {
      renderMessage("Email is validated", "success");
    } else {
      renderMessage("Email is not validated", "error");
    }
  } else if (e.target.classList.contains("phone")) {
    let regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    userInput = prompt("Please enter a phone: ");
    if (regexPhone.test(userInput)) {
      renderMessage("Phone is validated", "success");
    } else {
      renderMessage("Phone is not validated", "error");
    }
  } else if (e.target.classList.contains("post")) {
    let regexPost = /^\d{4}$/;
    userInput = prompt("Please enter a post code: ");
    if (regexPost.test(userInput)) {
      renderMessage("Post code is validated", "success");
    } else {
      renderMessage("Post code is not validated", "error");
    }
  }
}
function renderMessage(message, className) {
  let p = document.querySelector("p");
  p.style.display = "block";
  p.innerText = `${message}`;
  p.className = className;
  setTimeout(() => {
    p.style.display = "none";
  }, 2500);
}
