import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { errorMessage } from "./components/errorMessage.js";
import { getContent } from "./components/getContent.js";

async function renderContentLatestReviews() {
  const urlReviews = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=5";
  const newestReviewsContainer = document.querySelector(".new-reviews-content");

  try {
    const result = await getContent(urlReviews);
    newestReviewsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      if (i === 3) {
        break;
      }
      createHTMLForPosts(newestReviewsContainer, result[i]);
    }
  } catch (error) {
    newestReviewsContainer.innerHTML = errorMessage("There was an error loading. Please refresh or try again later.");
  }
}

renderContentLatestReviews();
