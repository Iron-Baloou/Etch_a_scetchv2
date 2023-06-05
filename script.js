const drawpad = document.getElementById('drawpad');
let currentColor = '';

// Farbe ändern
function changeColor(cell, color) {
    cell.style.backgroundColor = color;
}

// Event Listener für Mouseover hinzufügen
function addMouseoverListener(cell) {
    cell.addEventListener('mouseover', () => {
        changeColor(cell, Color);
    });
}

// Button-Elemente auswählen
const redButton = document.getElementById('red');
const blackButton = document.getElementById('black');
const randomButton = document.getElementById('randomcolor');

// Event Listener für die Button-Klicks hinzufügen
redButton.addEventListener('click', () => {
    Color = 'red';
});

blackButton.addEventListener('click', () => {
    Color = 'black';
});

randomButton.addEventListener('click', () => {
    const colorred = Math.floor(Math.random() * 255);
    const colorgreen = Math.floor(Math.random() * 255);
    const colorblue = Math.floor(Math.random() * 255);
    Color = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
});

// Rastergröße ändern
const rasterButton = document.getElementById('raster');
rasterButton.addEventListener('click', () => {
    const size = prompt('Rastergröße eingeben');
    drawpad.innerHTML = '';
    raster(size);
});

//reset
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

// Raster erstellen 
function raster(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        drawpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid black';
            row.appendChild(cell);

            addMouseoverListener(cell);
        }
    }
}

raster();
