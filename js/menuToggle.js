function toggleMenu() {
  const dropdownMenu = document.querySelector(".navbar-open");
  dropdownMenu.classList.toggle("toggle");
}

const menuButton = document.querySelector(".menu-icon");

menuButton.onclick = toggleMenu;

const menuOpen = document.getElementById(".navbar-open");
