export function createHTMLForPosts(container, result) {
  container.innerHTML += `
    <a href="blogPostSpecific.html?id=${result.id}" class="post-card">
        <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="thumbnail-img">
        <div class="post-content-wrapper">
          
          <h2>${result.title.rendered}</h2>
         <p>${result.acf.subheading}<p>
        </div>
    </a>`;
}

{
  /* <span class="category">${convertCategories(result.categories[0])}</span> */
}
