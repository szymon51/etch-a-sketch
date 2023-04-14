function updateGrid() {
    removeGrid();
    createGrid(askForNumber()); 
    square = document.querySelectorAll('.column > div');
    addColorChange();
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

function randomRgb() {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

function randomNumber() {
   return Math.floor(Math.random() * 255);
}

function removeGrid() {
   let columns = document.querySelectorAll("#grid > div");
   square.forEach((element) => element.remove()); 
   columns.forEach((element) => element.remove());
}

function addColorChange() {
    square.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.background = randomRgb();
        }), 
        element.addEventListener("mouseout", () => {
            element.classList.remove("hover");
        })
    });
}

function askForNumber() {
    let number = prompt("Enter the amounth of squares per side");
    if (number > 100) alert("The number you have entered is too large!");
    else return number;
}

console.log(randomRgb());
const numberOfSquares = 4;
const grid = document.querySelector('#grid');
createGrid(numberOfSquares);
let square = document.querySelectorAll('.column > div');
addColorChange();

const button = document.querySelector('button');
button.addEventListener('click', updateGrid);