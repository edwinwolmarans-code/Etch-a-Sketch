let startNumBlocks = 16;

const container = document.querySelector("#container");


function setUp (numBlocks) {
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
        uniqueSection.style.backgroundColor = "blue";
    })};
}


function clear () {
    const allSections = document.querySelectorAll(".section")
    for (const sec of allSections) {
        container.removeChild(sec)
    }
}


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let blocks = prompt("Number of squares per side:", "")
    blocks = Number(blocks)
    clear()
    setUp(blocks)
});

setUp(startNumBlocks)
