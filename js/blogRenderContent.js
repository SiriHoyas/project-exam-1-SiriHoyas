import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { errorMessage } from "./components/errorMessage.js";
import { getContent } from "./components/getContent.js";

export async function renderContentBlog() {
  const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";
  const postsContainer = document.querySelector(".posts-container");

  try {
    const result = await getContent(getAllPosts);
    postsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      createHTMLForPosts(postsContainer, result[i]);
    }
  } catch (error) {
    document.querySelector(".filter-button-container").style.display = "none";
    document.querySelector(".show-more-btn").style.display = "none";
    postsContainer.style.display = "flex";
    postsContainer.innerHTML = errorMessage("There was an error loading. Please refresh or try again later.");
  }
}

renderContentBlog();
