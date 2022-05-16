import { getContent } from "./components/getContent.js";
import { convertCategories } from "./components/categoryConverter.js";
import { expandImg } from "./postSpesificImgModal.js";

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const urlForSinglePost = "https://evolution.heysiri.codes/wp-json/wp/v2/posts/" + id;

async function getContentAndRenderSinglePost() {
  const result = await getContent(urlForSinglePost);
  const postSpecificContainer = document.querySelector(".post-spesific-container");
  const title = document.querySelector("title");
  title.innerHTML = `Evolution | ${result.title.rendered}`;
  createHTMLForSinglePost(postSpecificContainer, result);
  expandImg(result);
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

// document.querySelector(".add-comment").addEventListener("click", handleFormSubmit);

// document.querySelector("#postId").setAttribute("value", `${result.id}`);
// // function handleFormSubmit(event) {
// //   event.preventDefault();
// //   const [postId, name, email, comment] = event.target.elements;

// //   const data = JSON.stringify({
// //     post: postId.value,
// //     author_name: name.value,
// //     author_email: email.value,
// //     content: comment.value,
//   });
// console.log(data);
