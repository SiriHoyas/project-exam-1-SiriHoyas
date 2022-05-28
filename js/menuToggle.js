function toggleMenu() {
  const dropdownMenu = document.querySelector(".navbar-open");
  dropdownMenu.classList.toggle("toggle");
}

const menuButton = document.querySelector(".menu-icon");

menuButton.addEventListener("click", toggleMenu);
menuButton.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    // enter = 13, space = 32
    toggleMenu();
  }
});
