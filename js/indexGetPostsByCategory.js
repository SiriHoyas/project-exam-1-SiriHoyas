import { getContent } from "./components/getContent.js";
import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { convertCategories } from "./components/categoryConverter.js";

const urlReviews = "https://evolution.heysiri.codes/wp-json/wp/v2/posts?categories=5";

async function renderContentLatestReviews() {
  try {
    const result = await getContent(urlReviews);
    const newestReviewsContainer = document.querySelector(".new-reviews-content");
    newestReviewsContainer.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      if (i === 3) {
        break;
      }
      createHTMLForPosts(newestReviewsContainer, result[i]);
    }
  } catch (error) {}
}

renderContentLatestReviews();
