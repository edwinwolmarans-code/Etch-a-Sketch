const WIDTH = 800;
let numBlocks = 16;
let dimensions = WIDTH/(numBlocks/2);

const container = document.querySelector("#container");

for (let i = 0; i < (numBlocks * numBlocks); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `${i}`);
    div.classList.add("section");
    div.style.width = `${100/numBlocks}%`
    div.style.height = `${100/numBlocks}%`
    div.textContent = " ";

    container.appendChild(div)
  }