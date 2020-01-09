let draw = () => {
    let size = document.getElementById('grid-size').value;

    createGrid(size);
}

// Gets rid of all grid elements
let removeGrid = () => {
    let top = document.getElementById('flex-container');
    while(top.firstChild) {
        top.removeChild(top.firstChild);
    }
}

// Erases marks on grid.
let clearGrid = () => {
    const squares = document.querySelectorAll('.square-hovered');
    squares.forEach(square => {
        square.classList.remove('square-hovered');
    });
}

let createGrid = (size) => {
    // 960px wide
    let length = (960 / size) - 2;
    console.log('Square size: ' + length);
    const container = document.getElementById('flex-container');

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for(let k = 0; k < size; k++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.cssText = 'width: ' + length + 'px; height: ' + length + 'px;';
            square.addEventListener('mouseover', event => {
                square.classList.add('square-hovered');
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

const sizeBtn = document.getElementById('size-btn');
sizeBtn.addEventListener('click', (e) => {
    removeGrid();
    draw();
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', event => {
    clearGrid();
});

draw();
