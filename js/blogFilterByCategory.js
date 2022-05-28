import { getContent } from "./components/getContent.js";
import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { renderContentBlog } from "./blogRenderContent.js";
import { errorMessage } from "./components/errorMessage.js";

const postsContainer = document.querySelector(".posts-container");
async function renderFilteredContent(categoryNumber) {
  try {
    const categoryURL = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=" + categoryNumber;
    const result = await getContent(categoryURL);
    postsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      createHTMLForPosts(postsContainer, result[i]);
    }
  } catch (error) {
    postsContainer.style.display = "flex";
    postsContainer.innerHTML = errorMessage("There was an error loading. Please refresh or try again later.");
  }
}

const newsFilterBtn = document.querySelector(".news-filter");
const reviewsFilterBtn = document.querySelector(".reviews-filter");
const chargingFilterBtn = document.querySelector(".charging-filter");
const resetFilters = document.querySelector(".reset-filters");
const blogHeading = document.querySelector(".blog-heading");
const showMoreBtn = document.querySelector(".show-more-btn");

newsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(4);
  styleButtons(newsFilterBtn, reviewsFilterBtn, chargingFilterBtn);
  resetFilters.style.display = "flex";
  blogHeading.innerHTML = "NEWS";
  showMoreBtn.style.display = "none";
});

reviewsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(5);
  styleButtons(reviewsFilterBtn, newsFilterBtn, chargingFilterBtn);
  resetFilters.style.display = "flex";
  blogHeading.innerHTML = "REVIEWS";
  showMoreBtn.style.display = "none";
});

chargingFilterBtn.addEventListener("click", () => {
  renderFilteredContent(6);
  styleButtons(chargingFilterBtn, reviewsFilterBtn, newsFilterBtn);
  resetFilters.style.display = "flex";
  blogHeading.innerHTML = "CHARGING";
  showMoreBtn.style.display = "none";
});

function styleButtons(activeButton, inactiveButton1, inactiveButton2) {
  activeButton.style.backgroundColor = "var(--accent-green)";
  inactiveButton1.style.backgroundColor = "var( --main-bg-color)";
  inactiveButton2.style.backgroundColor = "var( --main-bg-color)";
}

function resetFiltersStyles() {
  resetFilters.style.display = "none";
  newsFilterBtn.style.backgroundColor = "var( --main-bg-color)";
  reviewsFilterBtn.style.backgroundColor = "var( --main-bg-color)";
  chargingFilterBtn.style.backgroundColor = "var( --main-bg-color)";
  showMoreBtn.style.display = "revert";
  blogHeading.innerHTML = "Latest posts";
}

resetFilters.addEventListener("click", () => {
  resetFiltersStyles();
  renderContentBlog();
});

resetFilters.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    resetFiltersStyles();
    renderContentBlog();
  }
});
