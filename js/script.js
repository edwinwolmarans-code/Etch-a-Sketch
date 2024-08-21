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
        
      };

      for (let e = 0; e < (numBlocks * numBlocks); e++) {
        const uniqueSection = document.querySelector(`#S${e}`);
        uniqueSection.opacity = 0;
        uniqueSection.addEventListener('mouseover',(event) => {
        uniqueSection.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                                ${Math.floor(Math.random() * 256)}, 
                                                ${Math.floor(Math.random() * 256)})`;
        if (uniqueSection.style.opacity >= 1) {
            uniqueSection.style.opacity = 1;
        } else {
            uniqueSection.style.opacity = `${uniqueSection.opacity += 0.1}`;
        }
    })};
};


function clear () {
    const allSections = document.querySelectorAll(".section");
    for (const sec of allSections) {
        container.removeChild(sec);
    }
};


const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let blocks = prompt("Number of squares per side:", "");
    blocks = Number(blocks);
    if (blocks > 100) {
        alert("Too big. Please choose a number between 2 and 100.");
    } else {
        clear();
        setUp(blocks);
    }
});

setUp(startNumBlocks);
