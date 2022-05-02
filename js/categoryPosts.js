import { getContent } from "./components/getContent.js";

const getPostByCategory =
  "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=5";

async function createHTML() {
  const result = await getContent(getPostByCategory);
  console.log(result);
  const newestPostsContainer = document.querySelector(".new-reviews-container");
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
    if (i === 3) {
      break;
    }
    newestPostsContainer.innerHTML += `
    <div class="post-card">
      <img src="${result[i].featured_media_src_url}" alt="${result[i].acf.imgAlt}" class="thumbnail-img">
      <div class="post-content-wrapper">
      <span class="category">CATEGORY</span>
      <h2>${result[i].title.rendered}</h2>
      <p>${result[i].acf.subheading}</p>
      </div>
      </div>`;
  }
}

createHTML();
