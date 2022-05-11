const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#your-name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#your-email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#your-subject");
const subjectError = document.querySelector("#subject-error");
const messageInput = document.querySelector("#your-message");
const messageError = document.querySelector("#message-error");

function validateForm() {
  event.preventDefault();

  let namePassed = false;
  let emailPassed = false;
  let subjectPassed = false;
  let messagePassed = false;

  if (checkLength(nameInput.value, 5) === true) {
    nameError.style.display = "none";
    namePassed = true;
  } else {
    nameError.style.display = "revert";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailPassed = true;
  } else {
    emailError.style.display = "revert";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
    subjectPassed = true;
  } else {
    subjectError.style.display = "revert";
  }

  if (checkLength(messageInput.value, 25) === true) {
    messageError.style.display = "none";
    messagePassed = true;
  } else {
    messageError.style.display = "revert";
  }

  if (namePassed && subjectPassed && emailPassed && messagePassed) {
    contactForm.style.display = "none";
    document.querySelector(".contact-form-heading").innerHTML = `Thank you!`;
    document.querySelector(".contact-form-description").innerHTML = `We will be in contact with you soon.`;
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /^([a-z0-9_\.\+-]+)@([\da-z-]+)(\.[a-z]{2,6})+$/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
