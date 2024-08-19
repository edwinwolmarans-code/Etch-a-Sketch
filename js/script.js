//const WIDTH = window.innerWidth
const WIDTH = 400;
let numBlocks = 16;
let dimensions = WIDTH/(numBlocks/2);

const container = document.querySelector("#container");

for (let i = 0; i < (numBlocks * numBlocks); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `${i}`);
    div.classList.add("section");
    // div.style.width = `${dimensions}px`
    // div.style.height = `${dimensions}px`
    div.textContent = "hi";

    container.appendChild(div)
  }

// div.style.cssText = "border: 2px; border-color: black;";
// div.style.backgroundColor = "blue"; 