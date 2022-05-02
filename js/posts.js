import { getContent } from "./components/getContent.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";

async function createPostsHtml() {
  const result = await getContent(getAllPosts);
  console.log(result);
  const filterByCategory = result.filter((post) => post.categories[0] === 4);
  console.log(filterByCategory);

  for (let i = 0; i < result.length; i++) {
    const postsContainer = document.querySelector(".posts-container");
    postsContainer.innerHTML += `<a href="post-specific.html?id=${result[i].id}" class="posts-card">
  <img src="${result[i].featured_media_src_url}" alt="${result[i].acf.imgAlt}" class="posts-img">
  <div class="posts-content-wrapper">
  <span class="posts-category">CATEGORY</span>
  <h2>${result[i].title.rendered}</h2>
  <p>${result[i].acf.subheading}</p>
  </div>
  </a>`;
  }
}

createPostsHtml();
