import { getContent } from "./components/getContent.js";
import { expandImg } from "./imgModal.js";
import { errorMessage } from "./components/errorMessage.js";

async function renderSinglePost() {
  const querystring = document.location.search;
  const params = new URLSearchParams(querystring);
  const id = params.get("id");
  const urlForSinglePost = "https://evolution.heysiri.codes/wp-json/wp/v2/posts/" + id;
  const postSpecificContainer = document.querySelector(".post-spesific-container");

  try {
    const result = await getContent(urlForSinglePost);
    const title = document.querySelector("title");
    title.innerHTML = `Evolution | ${result.title.rendered}`;
    createHTMLForSinglePost(postSpecificContainer, result);
    expandImg(result);
  } catch (error) {
    postSpecificContainer.innerHTML = errorMessage();
    postSpecificContainer.style.display = "flex";
  }
}

renderSinglePost();

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

  document.querySelector("#postId").setAttribute("value", `${result.id}`);
}

// Send comment to Wordpress
const commentContainer = document.querySelector(".add-comment");
commentContainer.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  const [postId, name, email, comment] = event.target.elements;

  const response = await fetch("https://evolution.heysiri.codes/wp-json/wp/v2/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      post: postId.value.trim(),
      author_name: name.value.trim(),
      author_email: email.value.trim(),
      content: comment.value.trim(),
    }),
  });
  if (response.ok) {
    commentContainer.innerHTML = "";
    commentContainer.innerHTML = `<div class="comment-submitted">Thanks! Your comment has been submitted.</div>`;
  } else {
    const json = await response.json();
    commentContainer.innerHTML = `<div class="comment-error">Your comment could not be posted. Please try again</div>`;
  }
}

// Convert categories from number to name
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

const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", function () {
  history.back();
});
