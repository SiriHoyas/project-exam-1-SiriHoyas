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
// Category converter
async function getCategory(category) {
  try {
    const url = "https://evolution.heysiri.codes/wp-json/wp/v2/categories";
    const result = await fetch(url);
    const json = await result.json();

    for (let i = 0; i < json.length; i++) {
      if (category === json[i].id) {
        return json[i].name.toUpperCase();
      }
    }
  } catch (error) {
    return "No category found";
  }
}
