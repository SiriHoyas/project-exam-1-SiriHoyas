import { createHTMLForPosts } from "./components/createHTMLPosts.js";
import { errorMessage } from "./components/errorMessage.js";
import { getContent } from "./components/getContent.js";

const slide1Container = document.querySelector(".slide1");

async function renderContentLatestPosts() {
  const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";
  const slide2Container = document.querySelector(".slide2");
  const slide3Container = document.querySelector(".slide3");

  try {
    const result = await getContent(getAllPosts);
    slide1Container.innerHTML = "";
    slide2Container.innerHTML = "";
    slide3Container.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i <= 2) {
        createHTMLForPosts(slide1Container, result[i]);
      } else if (i <= 5) {
        createHTMLForPosts(slide2Container, result[i]);
      } else if (i <= 8) {
        createHTMLForPosts(slide3Container, result[i]);
      }
    }
  } catch (error) {
    document.querySelector(".prev").style.display = "none";
    document.querySelector(".next").style.display = "none";
    document.querySelector(".slide-indicator-container").style.display = "none";
    slide1Container.innerHTML = errorMessage("There was an error loading. Please refresh or try again later");
  }
}

renderContentLatestPosts();
