import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts-container");

async function renderContentBlog() {
  try {
    const result = await getContent(getAllPosts);
    for (let i = 0; i < result.length; i++) {
      blogCreateHTML(postsContainer, result[i]);
    }
  } catch (error) {}
}

renderContentBlog();

async function renderFilteredContent(categoryNumber) {
  try {
    const categoryURL = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=" + categoryNumber;
    const result = await getContent(categoryURL);
    postsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      blogCreateHTML(postsContainer, result[i]);
    }
  } catch (error) {}
}

function blogCreateHTML(container, result) {
  container.innerHTML += `<a href="blogPostSpecific.html?id=${result.id}" class="posts-card">
<img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="posts-img">
<div class="posts-">
<span class="posts-category">${convertCategories(result.categories[0])}</span>
<h2>${result.title.rendered}</h2>
<p>${result.acf.subheading}</p>
</div>
</a>`;
}

const newsFilterBtn = document.querySelector(".news-filter");
const reviewsFilterBtn = document.querySelector(".reviews-filter");
const chargingFilterBtn = document.querySelector(".charging-filter");
const resetFilters = document.querySelector(".reset-filters");

newsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(4);
  styleButtons(newsFilterBtn, reviewsFilterBtn, chargingFilterBtn);
});

reviewsFilterBtn.addEventListener("click", () => {
  renderFilteredContent(5);
  styleButtons(reviewsFilterBtn, newsFilterBtn, chargingFilterBtn);
});

chargingFilterBtn.addEventListener("click", () => {
  renderFilteredContent(6);
  styleButtons(chargingFilterBtn, reviewsFilterBtn, newsFilterBtn);
});

function styleButtons(activeButton, inactiveButton1, inactiveButton2) {
  activeButton.style.backgroundColor = "var(--accent-green)";
  inactiveButton1.style.backgroundColor = "var( --main-bg-color)";
  inactiveButton2.style.backgroundColor = "var( --main-bg-color)";
}
