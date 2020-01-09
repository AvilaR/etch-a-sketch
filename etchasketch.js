const table = document.createElement('table');

let size = 16;

for(let i = 0; i < size; i++) {
    const tr = document.createElement('tr');
    for(let k = 0; k < size; k++) {
        const td = document.createElement('td');
        td.setAttribute('class', 'square');
        td.style.width = '' + (1000 / size * 100) + ' ';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

const container = document.querySelector('#container');
container.appendChild(table);

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        square.classList.add('square-hovered');
    });
});

const restartBtn = document.querySelector('#restart-btn');

restartBtn.addEventListener('click', (e) => {
    squares.forEach((square) => {
            square.classList.remove('square-hovered');
      });
});