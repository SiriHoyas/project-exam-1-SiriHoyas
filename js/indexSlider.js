const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const item1 = document.querySelector(".slide1");
const item2 = document.querySelector(".slide2");
const item3 = document.querySelector(".slide3");

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
  }
  if (counter === 2) {
    item2.classList.add("active");
    item1.classList.remove("active");
    item3.classList.remove("active");
  }
  if (counter === 3) {
    item3.classList.add("active");
    item1.classList.remove("active");
    item2.classList.remove("active");
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

//Mer dynamisk
