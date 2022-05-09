import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const showMoreBtn = document.querySelector(".show-more-btn");

async function showMore() {
  const url = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?offset=10";

  const result = await getContent(url);
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    createHTML(result[i]);
  }
  showMoreBtn.style.display = "none";
}

function createHTML(result) {
  const postsContainer = document.querySelector(".posts-container");
  postsContainer.innerHTML += `<a href="blogPostSpecific.html?id=${
    result.id
  }" class="posts-card">
  <img src="${result.featured_media_src_url}" alt="${
    result.acf.imgAlt
  }" class="posts-img">
  <div class="posts-">
  <span class="posts-category">${convertCategories(result.categories[0])}</span>
  <h2>${result.title.rendered}</h2>
  <p>${result.acf.subheading}</p>
  </div>
  </a>`;
}

showMoreBtn.addEventListener("click", showMore);
