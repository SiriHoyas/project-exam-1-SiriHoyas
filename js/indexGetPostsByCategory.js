import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const getPostByCategory = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=5";

async function renderContentLatestReviews() {
  try {
    const result = await getContent(getPostByCategory);
    const newestPostsContainer = document.querySelector(".new-reviews-content");
    for (let i = 0; i < result.length; i++) {
      if (i === 3) {
        break;
      }
      latestReviewsCreateHTML(newestPostsContainer, result[i]);
    }
  } catch (error) {}
}

renderContentLatestReviews();

function latestReviewsCreateHTML(container, result) {
  container.innerHTML += `
  <a href="blogPostSpecific.html?id=${result.id}" class="post-card">
    <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="thumbnail-img">
    <div class="post-content-wrapper">
      <span class="category">${convertCategories(result.categories[0])}</span>
      <h2>${result.title.rendered}</h2>
      <p>${result.acf.subheading}</p>
    </div>
  </a>`;
}
