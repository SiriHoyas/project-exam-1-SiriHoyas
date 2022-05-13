import { getContent } from "./components/getContent.js";
import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { convertCategories } from "./components/categoryConverter.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".posts-container");

async function renderContentBlog() {
  try {
    const result = await getContent(getAllPosts);
    for (let i = 0; i < result.length; i++) {
      createHTMLForPosts(postsContainer, result[i]);
    }
  } catch (error) {}
}

renderContentBlog();
