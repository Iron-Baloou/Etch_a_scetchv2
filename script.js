const drawpad = document.getElementById('drawpad');

// random farben bei span elementen
const span = document.querySelectorAll('span');

function changeColors() {
    span.forEach(span => {
        const colorred = Math.floor(Math.random() * 255);
        const colorgreen = Math.floor(Math.random() * 255);
        const colorblue = Math.floor(Math.random() * 255);
        span.style.color = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
    });
}

setInterval(changeColors, 2000);

//rastergr0esse button
const rasterButton = document.getElementById('raster');
rasterButton.addEventListener('click', () => {
    const size = prompt('Rastergroesse eingeben');
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
        // Zeilen erzeugen
        const row = document.createElement('div');
        row.classList.add('row');
        drawpad.appendChild(row);

        for (let j = 0; j < size; j++) {
            // Zellen erzeugen
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = '50px';
            cell.style.height = '50px';
            cell.style.backgroundColor = 'white';
            cell.style.border = '1px solid black';
            row.appendChild(cell);
            //einfärben
        }
    }
}
raster();

// einfärben der Zellen 

function colorcells() {
    const blackButton = document.getElementById('black');
    blackButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });
        });
    }
    );

    const redButton = document.getElementById('red');
    redButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'red';
            });
        });
    }
    );

    const randomButton = document.getElementById('randomcolor');
    randomButton.addEventListener('click', () => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                const colorred = Math.floor(Math.random() * 255);
                const colorgreen = Math.floor(Math.random() * 255);
                const colorblue = Math.floor(Math.random() * 255);
                cell.style.backgroundColor = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
            });
        });
    }
    );

}
colorcells();
farbeaendern();

function farbeaendern() {
    const rot = document.querySelector('#rot');
    const gruen = document.querySelector('#gruen');
    const blau = document.querySelector('#blau');
    const idrgb = document.querySelector('#idrgb');
    const meldung = document.querySelector('#meldung');
    const notification = document.getElementById('notification');

    console.log(rot, gruen, blau);

    idrgb.addEventListener('click', () => {
        const rotWert = parseInt(rot.value);
        const gruenWert = parseInt(gruen.value);
        const blauWert = parseInt(blau.value);
        const cells = document.querySelectorAll('.cell');
        console.log(cells);

        // Eingabeüberprüfung 

        if (isNaN(rotWert) || isNaN(gruenWert) || isNaN(blauWert)) {
            warning.innerHTML = 'Bitte geben Sie eine Zahl zwischen 0 und 255 ein';
        } else if (rotWert > 255 || gruenWert > 255 || blauWert > 255) {
            warning.innerHTML = 'Bitte geben Sie einen Wert zwischen 0 und 255 ein';
        } else if (rotWert < 0 || gruenWert < 0 || blauWert < 0) {
            warning.innerHTML = 'Bitte geben Sie einen Wert zwischen 0 und 255 ein';
        } else {
            warning.innerHTML = 'Alles in Ordnung';
        }
          
            cells.forEach(cell => {
                cell.addEventListener('mouseover', () => {
                    const colorred = rotWert;
                    const colorgreen = gruenWert;
                    const colorblue = blauWert;
                    cell.style.backgroundColor = 'rgb(' + colorred + ',' + colorgreen + ',' + colorblue + ')';
                });
            });
        
    });
}



