import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const urlForSinglePost = "https://evolution.heysiri.codes/wp-json/wp/v2/posts/" + id;

async function getContentAndRenderSinglePost() {
  const result = await getContent(urlForSinglePost);
  const postSpecificContainer = document.querySelector(".post-spesific-container");
  createHTMLForSinglePost(postSpecificContainer, result);
  document.querySelector("#postId").setAttribute("value", `${result.id}`);
  document.querySelector(".add-comment").addEventListener("click", handleFormSubmit);

  const imgClass = document.querySelector(".post-featured-img");
  console.log(imgClass);
  const modal = document.querySelector(".modal");

  imgClass.addEventListener("click", expand);
  window.addEventListener("click", close);

  function close(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  function expand() {
    document.querySelector(".modal").innerHTML = `<img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="expanded-img">`;
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".blog-post-spesific-body").classList.add("disable-scroll");
  }

  const backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", function () {
    console.log(history.back());
  });
}

getContentAndRenderSinglePost();

function createHTMLForSinglePost(container, result) {
  container.innerHTML = `
  <div class="post-specific-content">
  <span class="category">${convertCategories(result.categories[0])}</span>
  <h1>${result.title.rendered}</h1>
  <p>${result.acf.subheading}</p>
  <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="post-featured-img">
  <article>${result.acf.paragraph}</article>
  </div>`;
}

// // function handleFormSubmit(event) {
// //   event.preventDefault();
// //   const [postId, name, email, comment] = event.target.elements;

// //   const data = JSON.stringify({
// //     post: postId.value,
// //     author_name: name.value,
// //     author_email: email.value,
// //     content: comment.value,
//   });
console.log(data);
