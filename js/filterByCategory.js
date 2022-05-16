import { getContent } from "./components/getContent.js";
import { createHTMLForPosts } from "./components/createHTMLPosts.js";

const postsContainer = document.querySelector(".posts-container");
async function renderFilteredContent(categoryNumber) {
  try {
    const categoryURL = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=" + categoryNumber;
    const result = await getContent(categoryURL);
    postsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      createHTMLForPosts(postsContainer, result[i]);
    }
  } catch (error) {}
}

const newsFilterBtn = document.querySelector(".news-filter");
const reviewsFilterBtn = document.querySelector(".reviews-filter");
const chargingFilterBtn = document.querySelector(".charging-filter");
const resetFilters = document.querySelector(".reset-filters");

newsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(4);
  styleButtons(newsFilterBtn, reviewsFilterBtn, chargingFilterBtn);
  resetFilters.style.display = "revert";
});

reviewsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(5);
  styleButtons(reviewsFilterBtn, newsFilterBtn, chargingFilterBtn);
  resetFilters.style.display = "revert";
});

chargingFilterBtn.addEventListener("click", () => {
  renderFilteredContent(6);
  styleButtons(chargingFilterBtn, reviewsFilterBtn, newsFilterBtn);
  resetFilters.style.display = "revert";
});

function styleButtons(activeButton, inactiveButton1, inactiveButton2) {
  activeButton.style.backgroundColor = "var(--accent-green)";
  inactiveButton1.style.backgroundColor = "var( --main-bg-color)";
  inactiveButton2.style.backgroundColor = "var( --main-bg-color)";
}
