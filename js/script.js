const WIDTH = 800;
let numBlocks = 16;
let dimensions = WIDTH/(numBlocks/2);

const container = document.querySelector("#container");

for (let i = 0; i < (numBlocks * numBlocks); i++) {
    const div = document.createElement("div");
    div.setAttribute("id", `S${i}`);
    div.classList.add("section");
    div.style.width = `${100/numBlocks}%`;
    div.style.height = `${100/numBlocks}%`;
    div.textContent = " ";

    container.appendChild(div);
    
  }

for (let e = 0; e < (numBlocks * numBlocks); e++) {
    const uniqueSection = document.querySelector(`#S${e}`)
    uniqueSection.addEventListener('mouseover',(event) => {
    console.log("touched");
    uniqueSection.style.backgroundColor = "blue";
})};
