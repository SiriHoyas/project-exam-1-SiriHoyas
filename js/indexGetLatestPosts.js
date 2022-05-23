import { getContent } from "./components/getContent.js";
import { createHTMLForPosts } from "./components/createHTMLPosts.js";

const getAllPosts = "https://evolution.heysiri.codes/wp-json/wp/v2/posts";
const slide1Container = document.querySelector(".slide1");
const slide2Container = document.querySelector(".slide2");
const slide3Container = document.querySelector(".slide3");

async function renderContentLatestPosts() {
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
  } catch (error) {}
}

renderContentLatestPosts();
