import { getContent } from "./components/getContent.js";

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
}

getContentAndRenderSinglePost();

async function createHTMLForSinglePost(container, result) {
  const category = await getCategory(result.categories[0]);
  container.innerHTML = `
  <div class="post-specific-content">
  <span class="category">${category}</span>
  <h1>${result.title.rendered}</h1>
  <p>${result.acf.subheading}</p>
  <img src="${result.featured_media_src_url}" alt="${result.acf.imgAlt}" class="post-featured-img">
  <article>${result.acf.paragraph}</article>
  </div>`;
  expandImg(result);
}

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

function expandImg(result) {
  const imgClass = document.querySelector(".post-featured-img");
  console.log(imgClass);
  const modal = document.querySelector(".modal");

  imgClass.addEventListener("click", expand);
  window.addEventListener("click", close);

  function close(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.querySelector(".blog-post-spesific-body").classList.remove("disable-scroll");
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
