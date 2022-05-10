const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const item1 = document.querySelector(".slide1");
const item2 = document.querySelector(".slide2");
const item3 = document.querySelector(".slide3");

const indicator1 = document.querySelector(".indicator-1");
const indicator2 = document.querySelector(".indicator-2");
const indicator3 = document.querySelector(".indicator-3");

let counter = 1;
console.log(counter);

function next() {
  if (counter === 3) {
    counter = 1;
  } else {
    counter++;
  }
  console.log(counter);
  checkState();
}

function prev() {
  if (counter <= 1) {
    counter = 3;
  } else {
    counter--;
  }
  console.log(counter);

  checkState();
}

function checkState() {
  if (counter === 1) {
    item1.classList.add("active");
    item2.classList.remove("active");
    item3.classList.remove("active");
    indicator1.style.backgroundColor = "var(--accent-blue)";
    indicator2.style.backgroundColor = "#5A5A5A";
    indicator3.style.backgroundColor = "#5A5A5A";
  }
  if (counter === 2) {
    item2.classList.add("active");
    item1.classList.remove("active");
    item3.classList.remove("active");
    indicator1.style.backgroundColor = "#5A5A5A";
    indicator2.style.backgroundColor = "var(--accent-blue)";
    indicator3.style.backgroundColor = "#5A5A5A";
  }
  if (counter === 3) {
    item3.classList.add("active");
    item1.classList.remove("active");
    item2.classList.remove("active");
    indicator1.style.backgroundColor = "#5A5A5A";
    indicator2.style.backgroundColor = "#5A5A5A";
    indicator3.style.backgroundColor = "var(--accent-blue)";
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

//Mer dynamisk
