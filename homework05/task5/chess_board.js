'use strict';

const names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbs = [8, 7, 6, 5, 4, 3, 2, 1];

const button = document.querySelector('.generate-board');
const mainContainer = document.querySelector('.container');

button.addEventListener('click', function () {
        generateChessBoard();
});

function generateChessBoard() {
    const mainBoard = document.createElement('div');
    mainBoard.className = 'main-board';
    mainContainer.append(mainBoard);
    generateCellsForChessBoard(mainBoard);
}

function generateCellsForChessBoard(mainBoard) {
    for (let i = 0; i <= 8; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        mainBoard.append(row);
        if (i == 0) {
            generateCellsNames(row);
        } else if (i % 2 == 0) {
            generateEvenCells(i, row);
        } else {
            generateOddCells(i, row);
        }
    }
}

function generateCellsNames(row) {
    for (let j = 0; j <= 8; j++) {
        if (j == 0) {
            const cellStartName = document.createElement('div');
            cellStartName.className = 'cell-start-name';
            row.append(cellStartName);
        } else {
            let ch = names[j - 1];
            const cellName = document.createElement('div');
            cellName.className = 'cell-name';
            cellName.innerText = ch;
            row.append(cellName);
        }
    }
}

function generateCellsNumbs(m, row) {
    let num = numbs[m - 1];
    const cellNum = document.createElement('div');
    cellNum.className = 'number';
    cellNum.innerText = num;
    row.append(cellNum);
}

function generateEvenCells(m, row) {
    for (let j = 0; j <= 8; j++) {
        if (j == 0) {
            generateCellsNumbs(m, row);
        } else if (j % 2 == 0) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add('cell-color-white');
            generateBorders(m, j, cell);
            row.append(cell);
        } else {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add('cell-color-black');
            generateBorders(m, j, cell);
            row.append(cell);
        }
    }
}

function generateOddCells (m, row) {
    for (let j = 0; j <= 8; j++) {
        if (j == 0) {
            generateCellsNumbs(m, row);
        } else if (j % 2 == 0) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add('cell-color-black');
            generateBorders(m, j, cell);
            row.append(cell);
        } else {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.classList.add('cell-color-white');
            generateBorders(m, j, cell);
            row.append(cell);
        }
    }
}

function generateBorders(m, n, cell) {
    if (m == 1) {
        cell.classList.add ('border-top');
    } else if (m == 8) {              
        cell.classList.add ('border-bottom');
    }
    if (n == 1) {
        cell.classList.add ('border-left');
    } else if (n == 8) {
        cell.classList.add ('border-right');
    }
}

