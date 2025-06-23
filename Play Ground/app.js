const base_url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const container = document.querySelector("#container");

for (let i = 1; i <= 151; i++) {
  const newCon = document.createElement("div");
  newCon.setAttribute("class", "newCon");

  const newImg = document.createElement("img");
  newImg.setAttribute("src", `${base_url}${i}.png`);
  newCon.appendChild(newImg);

  const num = document.createElement("p");
  num.innerText = `#${i}`;
  newCon.appendChild(num);

  container.appendChild(newCon);
}
