import { getCategory } from "../categoryConverter.js";
export async function createHTMLForPosts(container, post) {
  const category = await getCategory(post.categories[0]);

  container.innerHTML += `
    <a href="blogPostSpecific.html?id=${post.id}" class="post-card">
        <img src="${post.featured_media_src_url}" alt="${post.acf.imgAlt}" class="thumbnail-img">
        <div class="post-content-wrapper">
          <span class="category">${category}</span>
          <h2>${post.title.rendered}</h2>
          <p>${post.acf.subheading}<p>
        </div>
    </a>`;
}
