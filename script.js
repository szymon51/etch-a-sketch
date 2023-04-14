function newGrid() {
    askForNumber();
    removeGrid();
    createGrid(numberOfSquares);
    gridElement = document.querySelectorAll("#grid > div");
    addChangeColor();
}

function createGrid(squaresPerSide) {
    for (let i = 1; i <= squaresPerSide**2; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);
    }
}

function removeGrid() {
   gridElement.forEach(element => element.remove()); 
}

function addChangeColor() {
    gridElement.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.add("hover");
        }), 
        element.addEventListener("mouseout", (event) => {
            element.classList.remove("hover");
        })
    });
}

function askForNumber() {
    numberOfSquares = prompt("Enter the amounth of squares per side");
    if (numberOfSquares > 100) alert("The number you have entered is too large!");
}

let numberOfSquares = 4;
const grid = document.querySelector('#grid');
createGrid(numberOfSquares);
let gridElement = document.querySelectorAll("#grid > div");
addChangeColor();

const button = document.querySelector('button');
button.addEventListener('click', newGrid);