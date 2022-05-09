import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function getAndRenderContentForLatestPostsFrontPage() {
  const result = await getContent(getAllPosts);
  console.log(result);

  const slide1Container = document.querySelector(".slide1");
  const slide2Container = document.querySelector(".slide2");
  const slide3Container = document.querySelector(".slide3");

  for (let i = 0; i < result.length; i++) {
    if (i <= 2) {
      createHTMLForLatestPosts(slide1Container, result[i]);
    } else if (i <= 5) {
      createHTMLForLatestPosts(slide2Container, result[i]);
    } else if (i <= 8) {
      createHTMLForLatestPosts(slide3Container, result[i]);
    }
  }
}

getAndRenderContentForLatestPostsFrontPage();

function createHTMLForLatestPosts(container, result) {
  container.innerHTML += `<a href="blogPostSpecific.html?id=${
    result.id
  }" class="post-card">
      <img src="${result.featured_media_src_url}" alt="${
    result.acf.imgAlt
  }" class="thumbnail-img">
      <div class="post-content-wrapper">
      <span class="category">${convertCategories(result.categories[0])}</span>
      <h2>${result.title.rendered}</h2>
      <p>${result.acf.subheading}<p>
      </div>
        </a>`;
}
