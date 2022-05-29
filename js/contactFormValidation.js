const contactForm = document.querySelector(".contact-form");

async function validateAndSubmitForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#yourName");
  const email = document.querySelector("#yourEmail");
  const subject = document.querySelector("#yourSubject");
  const messageInput = document.querySelector("#yourMessage");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const subjectError = document.querySelector("#subject-error");
  const messageError = document.querySelector("#message-error");

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

    // Send contact form to wordpress
    const response = await fetch("https://evolution.heysiri.codes/wp-json/contact-form-7/v1/contact-forms/149/feedback", {
      method: "POST",
      body: JSON.stringify({
        yourName: nameInput.value.trim(),
        yourEmail: email.value.trim(),
        yourSubject: subject.value.trim(),
        yourMessage: messageInput.value.trim(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
  }
}

contactForm.addEventListener("submit", validateAndSubmitForm);

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
