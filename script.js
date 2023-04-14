function updateGrid() {
    removeGrid();
    createGrid(askForNumber()); 
    square = document.querySelectorAll('.column > div');
    addChangeColor();
}

function createGrid(squaresPerSide) {
    for (let i = 1; i <= squaresPerSide; i++) {
        const parentDiv = document.createElement('div');
        grid.appendChild(parentDiv);
        parentDiv.classList.add('column');
        for (let j = 1; j <= squaresPerSide; j++) {
            const div = document.createElement('div');
            parentDiv.appendChild(div);
        }
    }
}

function removeGrid() {
   let columns = document.querySelectorAll("#grid > div");
   square.forEach((element) => element.remove()); 
   columns.forEach((element) => element.remove());
}

function addChangeColor() {
    square.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            element.classList.add("hover");
        }), 
        element.addEventListener("mouseout", (event) => {
            element.classList.remove("hover");
        })
    });
}

function askForNumber() {
    let number = prompt("Enter the amounth of squares per side");
    if (number > 100) alert("The number you have entered is too large!");
    else return number;
}

const numberOfSquares = 4;
const grid = document.querySelector('#grid');
createGrid(numberOfSquares);
let square = document.querySelectorAll('.column > div');
addChangeColor();

const button = document.querySelector('button');
button.addEventListener('click', updateGrid);