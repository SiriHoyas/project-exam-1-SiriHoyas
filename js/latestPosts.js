import { getContent } from "./components/getContent.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function createHTML() {
  const result = await getContent(getAllPosts);
  console.log(result);
  const newestPostsContainer = document.querySelector(
    ".newest-posts-container"
  );
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
    if (i <= 3) {
      newestPostsContainer.innerHTML += `
      <img src="${result[i].featured_media_src_url}" alt="${result[i].acf.imgAlt}" class="thumbnail-img">
      <h2>${result[i].title.rendered}</h2>
      <h3>${result[i].acf.subheading}</h3>`;
    }
  }
}

createHTML();
