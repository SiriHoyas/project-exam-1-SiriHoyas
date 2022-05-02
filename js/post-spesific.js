const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
console.log(id);

let url = "https://evolution.heysiri.codes/wp-json/wp/v2/posts/" + id;

async function getSinglePost() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(url);
  const postSpecificContainer = document.querySelector(
    ".post-spesific-container"
  );

  postSpecificContainer.innerHTML = `<h1>${result.title.rendered}</h1>`;
}

getSinglePost();
