const keys = "9b7_mlxS0r3DTmSIueej5OaNkfZyJgEi1fU-fGwnQJg";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${keys}`;
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;
  console.log(data);

  if (page === 1) {
    searchResults.innerHTM = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.link.html;
    imageLink.target = "__blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(imageWrapper);
  });

  page++;

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
  });
}
