let pastel = ["#FAEDCB", "#C9E4DE", "#C6DEF1", "#DBCDF0", "#F2C6DE", "#F7D9C4"]


//creates the sketchpad
function createSketchpad(row = 16, col = 16)
{
    const grid = document.querySelector('.sketchpad');

    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`;

    for (let i = 0; i < row; i++)
    {
        for (let j = 0; j < col; j++)
        {
            console.log(i, j)
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            console.log("cell created")
        }
    }
}

function changeColor()
{
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener('mouseover', function(e)
        {
            e.target.style.backgroundColor = pastel[Math.floor(Math.random() * pastel.length)];
        });
    }
}

function clear()
{
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].style.backgroundColor = 'white';
    }

}

window.onload = createSketchpad();
let intervalId = setInterval(changeColor, 1000);

const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelectorAll('.size');

for (let i = 0; i < sizeButton.length; i++)
{
    sizeButton[i].addEventListener('click', function() 
    {
        let size = parseInt(sizeButton[i].value);
        createSketchpad(size, size);
    });
}



clearButton.addEventListener('click', clear);