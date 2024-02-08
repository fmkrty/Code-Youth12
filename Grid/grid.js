const gridSize = 5;
let playerPosition = { x: 0, y: 0 };

document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    document.getElementById('upButton').addEventListener('click', () => movePlayer(0, -1));
    document.getElementById('downButton').addEventListener('click', () => movePlayer(0, 1));
    document.getElementById('leftButton').addEventListener('click', () => movePlayer(-1, 0));
    document.getElementById('rightButton').addEventListener('click', () => movePlayer(1, 0));
});

function renderGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const block = document.createElement('div');
            block.classList.add('block');
            if (x === playerPosition.x && y === playerPosition.y) {
                block.classList.add('player');
            }
            grid.appendChild(block);
        }
    }
}

function movePlayer(deltaX, deltaY) {
    const newX = playerPosition.x + deltaX;
    const newY = playerPosition.y + deltaY;

    if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        renderGrid();
    }
}
