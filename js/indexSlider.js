const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

const indicator1 = document.querySelector(".indicator-1");
const indicator2 = document.querySelector(".indicator-2");
const indicator3 = document.querySelector(".indicator-3");

let counter = 1;

function next() {
  if (counter === 3) {
    counter = 1;
  } else {
    counter++;
  }
  checkState();
}

function prev() {
  if (counter <= 1) {
    counter = 3;
  } else {
    counter--;
  }
  checkState();
}

function checkState() {
  if (counter === 1) {
    slide1.classList.add("active");
    slide2.classList.remove("active");
    slide3.classList.remove("active");
    indicator1.style.backgroundColor = "var(--accent-blue)";
    indicator2.style.backgroundColor = "#5A5A5A";
    indicator3.style.backgroundColor = "#5A5A5A";
  }
  if (counter === 2) {
    slide2.classList.add("active");
    slide1.classList.remove("active");
    slide3.classList.remove("active");
    indicator1.style.backgroundColor = "#5A5A5A";
    indicator2.style.backgroundColor = "var(--accent-blue)";
    indicator3.style.backgroundColor = "#5A5A5A";
  }
  if (counter === 3) {
    slide3.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    indicator1.style.backgroundColor = "#5A5A5A";
    indicator2.style.backgroundColor = "#5A5A5A";
    indicator3.style.backgroundColor = "var(--accent-blue)";
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
