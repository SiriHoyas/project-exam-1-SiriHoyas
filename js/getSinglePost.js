import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const urlForSinglePost =
  "https://evolution.heysiri.codes/wp-json/wp/v2/posts/" + id;

async function getContentAndRenderSinglePost() {
  const result = await getContent(urlForSinglePost);
  const postSpecificContainer = document.querySelector(
    ".post-spesific-container"
  );
  createHTMLForSinglePost(postSpecificContainer, result);
}

getContentAndRenderSinglePost();

function createHTMLForSinglePost(container, result) {
  container.innerHTML = `
  <div class="post-specific-container">
  <span>${convertCategories(result.categories[0])}</span>
  <h1>${result.title.rendered}</h1>
  <p>${result.acf.subheading}</p>
  <img src="${result.featured_media_src_url}" alt="${
    result.acf.imgAlt
  }" class="post-featured-img">
  <article>${result.acf.paragraph}</article>
  </div>`;
}
