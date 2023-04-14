function createGrid() {
    for (let i = 1; i <= 16; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);
    }
}

function changeColor() {
    const gridElement = document.querySelectorAll("#grid > div");
    gridElement.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.add("hover");
        }), 
        element.addEventListener("mouseout", (event) => {
            element.classList.remove("hover");
        })
    });
}

const grid = document.querySelector('#grid');
createGrid();
changeColor();