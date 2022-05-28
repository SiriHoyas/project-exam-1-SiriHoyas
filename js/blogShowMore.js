import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { errorMessage } from "./components/errorMessage.js";
import { getContent } from "./components/getContent.js";

const showMoreBtn = document.querySelector(".show-more-btn");

async function showMore() {
  const url = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?offset=10";
  const postsContainer = document.querySelector(".posts-container");

  try {
    const result = await getContent(url);
    for (let i = 0; i < result.length; i++) {
      createHTMLForPosts(postsContainer, result[i]);
    }
    showMoreBtn.style.display = "none";
  } catch (error) {
    postsContainer.style.display = "flex";
    document.querySelector(".filter-button-container").style.display = "none";
    showMoreBtn.style.display = "none";
    postsContainer.innerHTML = errorMessage("There was an error loading. Please refresh or try again later.");
  }
}

showMoreBtn.addEventListener("click", showMore);
