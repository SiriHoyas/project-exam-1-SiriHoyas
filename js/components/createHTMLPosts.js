export async function createHTMLForPosts(container, result) {
  const category = await getCategory(result.categories[0]);

  container.innerHTML += `
    <a href="blogPostSpecific.html?id=${result.id}" class="post-card">
        <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="thumbnail-img">
        <div class="post-content-wrapper">
        <span class="category">${category}</span>
          <h2>${result.title.rendered}</h2>
          <p>${result.acf.subheading}<p>
        </div>
    </a>`;
}
// Category converter
async function getCategory(category) {
  const url = "https://evolution.heysiri.codes/wp-json/wp/v2/categories";
  const result = await fetch(url);
  const json = await result.json();

  for (let i = 0; i < json.length; i++) {
    if (category === json[i].id) {
      return json[i].name.toUpperCase();
    }
  }
}
