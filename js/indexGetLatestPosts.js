import { getContent } from "./components/getContent.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function populatePage() {
  const result = await getContent(getAllPosts);
  console.log(result);

  const slide1Container = document.querySelector(".slide1");
  const slide2Container = document.querySelector(".slide2");
  const slide3Container = document.querySelector(".slide3");

  for (let i = 0; i < result.length; i++) {
    if (i <= 2) {
      createHTML(slide1Container, result[i]);
    } else if (i <= 5) {
      createHTML(slide2Container, result[i]);
    } else if (i <= 8) {
      createHTML(slide3Container, result[i]);
    }
  }
}

populatePage();

function createHTML(container, result) {
  container.innerHTML += `<div class="post-card">
      <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="thumbnail-img">
      <div class="post-content-wrapper">
      <span class="category">CATEGORY</span>
      <h2>${result.title.rendered}</h2>
      <p>${result.acf.subheading}<p>
      </div>
        </div>`;
}
