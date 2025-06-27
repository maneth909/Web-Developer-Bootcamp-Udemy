const button = document.querySelector("#button");
const form = document.querySelector("form");
const container = document.querySelector("#container");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  getData();
});

const getData = async function () {
  let query = form.elements.input.value;
  const config = { params: { q: query } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res.data);
  getImg(res.data);
  form.elements.input.value = "";
};

const getImg = async function (movies) {
  container.innerHTML = "";
  for (let movie of movies) {
    if (movie.show.image) {
      let imgURL = await movie.show.image.medium;
      const newImg = document.createElement("img");
      newImg.src = imgURL;
      container.prepend(newImg);
    }
  }
};
