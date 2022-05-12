import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function renderContentBlog() {
  try {
    const result = await getContent(getAllPosts);
    const postsContainer = document.querySelector(".posts-container");
    for (let i = 0; i < result.length; i++) {
      blogCreateHTML(postsContainer, result[i]);
    }
  } catch (error) {}
}

renderContentBlog();

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
