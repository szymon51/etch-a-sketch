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
            element.style.backgroundColor = "black";
        }), 
        element.addEventListener("mouseout", (event) => {
            element.style.backgroundColor = "white";
        })
    });
}

const grid = document.querySelector('#grid');
createGrid();
changeColor();