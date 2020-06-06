'use strict';

const button = document.querySelector('.generate-board');

button.addEventListener('click', function () {
        generateChessBoard()
});

const mainContainer = document.querySelector('.container')

function generateChessBoard() {
    const mainBoard = document.createElement('div');
    mainBoard.className = 'main-board';
    mainContainer.append(mainBoard);
    generateCellsForChessBoard(mainBoard);
    // mainBoard.insertAdjacentHTML('afterbegin', generateCellsForChessBoard());
};

function generateCellsForChessBoard(mainBoard) {
    const names = ['A', 'B', 'C', 'D', 'F', 'E', 'G', 'H']
    const numbs = [8, 7, 6, 5, 4, 3, 2, 1]
    for (let i = 0; i <= 8; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        mainBoard.append(row);
        if (i == 0) {
            for (let j = 0; j <= 8; j++) {
                if (i == 0) {
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
        } else if (i % 2 == 0) {
            for (let j = 0; j <= 8; j++) {
                if (j == 0) {
                    let num = numbs[i - 1];
                    const cellNum = document.createElement('div');
                    cellNum.className = 'number';
                    cellNum.innerText = num;
                    row.append(cellNum);
                } else if (j % 2 == 0) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.classList.add('cell-color-white');
                    if (i == 1) {
                        cell.classList.add ('border-top');
                    } else if (i == 8) {              
                        cell.classList.add ('border-bottom');
                    }
                    if (j == 1) {
                        cell.classList.add ('border-left');
                    } else if (j == 8) {
                        cell.classList.add ('border-right');
                    }
                    row.append(cell);
                } else {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.classList.add('cell-color-black');
                    if (i == 1) {
                        cell.classList.add ('border-top');
                    } else if (i == 8) {              
                        cell.classList.add ('border-bottom');
                    }
                    if (j == 1) {
                        cell.classList.add ('border-left');
                    } else if (j == 8) {
                        cell.classList.add ('border-right');
                    }
                    row.append(cell);
                }

            }
        } else {
            for (let j = 0; j <= 8; j++) {
                if (j == 0) {
                    let num = numbs[i - 1];
                    const cellNum = document.createElement('div');
                    cellNum.className = 'number';
                    cellNum.innerText = num;
                    row.append(cellNum);
                } else if (j % 2 == 0) {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.classList.add('cell-color-black');
                    if (i == 1) {
                        cell.classList.add ('border-top');
                    } else if (i == 8) {              
                        cell.classList.add ('border-bottom');
                    }
                    if (j == 1) {
                        cell.classList.add ('border-left');
                    } else if (j == 8) {
                        cell.classList.add ('border-right');
                    }
                    row.append(cell);
                } else {
                    const cell = document.createElement('div');
                    cell.className = 'cell';
                    cell.classList.add('cell-color-white');
                    if (i == 1) {
                        cell.classList.add ('border-top');
                    } else if (i == 8) {              
                        cell.classList.add ('border-bottom');
                    }
                    if (j == 1) {
                        cell.classList.add ('border-left');
                    } else if (j == 8) {
                        cell.classList.add ('border-right');
                    }
                    row.append(cell);
                }
            }
        }
    }
};
