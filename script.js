const grid = document.querySelector('#grid');

for (let i = 1; i <= 16; i++) {
    const gridElement = document.createElement('div');
    grid.appendChild(gridElement);
}