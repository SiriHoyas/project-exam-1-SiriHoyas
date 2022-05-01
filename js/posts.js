import { getContent } from "./components/getContent.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function createPostsHtml() {
  const result = await getContent(getAllPosts);
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    const postsContainer = document.querySelector(".posts-container");
    postsContainer.innerHTML += `<div class="posts-card">
  <img src="${result[i].featured_media_src_url}" alt="${result[i].acf.imgAlt}" class="posts-img">
  <span class="posts-category">CATEGORT</span>
  <h2>${result[i].title.rendered}</h2>
  <p>${result[i].acf.subheading}</p>
  </div>`;

    // let categories = result[i].categories[0];
    //   if (categories === 4) {
    //     console.log(categories);
    //     const postsContainer = document.querySelector(".posts-container");
    //     postsContainer.innerHTML += `<div class="posts-card">
    // <img src="${result[i].featured_media_src_url}" alt="${result[i].acf.imgAlt}" class="posts-img">
    // <span class="posts-category">CATEGORT</span>
    // <h2>${result[i].title.rendered}</h2>
    // <p>${result[i].acf.subheading}</p>
    // </div>`;
    //   }
  }
}

createPostsHtml();
