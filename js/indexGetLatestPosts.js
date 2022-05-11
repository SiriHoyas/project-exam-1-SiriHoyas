import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function renderContentLatestPosts() {
  try {
    const result = await getContent(getAllPosts);

    const slide1Container = document.querySelector(".slide1");
    const slide2Container = document.querySelector(".slide2");
    const slide3Container = document.querySelector(".slide3");

    slide1Container.innerHTML = "";
    slide2Container.innerHTML = "";
    slide3Container.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i <= 2) {
        laatestPostsCreateHTML(slide1Container, result[i]);
      } else if (i <= 5) {
        laatestPostsCreateHTML(slide2Container, result[i]);
      } else if (i <= 8) {
        laatestPostsCreateHTML(slide3Container, result[i]);
      }
    }
  } catch (error) {}
}

renderContentLatestPosts();

function laatestPostsCreateHTML(container, result) {
  container.innerHTML += `
  <a href="blogPostSpecific.html?id=${result.id}" class="post-card">
      <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="thumbnail-img">
      <div class="post-content-wrapper">
        <span class="category">${convertCategories(result.categories[0])}</span>
        <h2>${result.title.rendered}</h2>
       <p>${result.acf.subheading}<p>
      </div>
  </a>`;
}
