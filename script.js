//creates the sketchpad
function createSketchpad()
{
    const grid = document.querySelector('.sketchpad');

    for (let row = 0; row < 16; row++)
    {
        for (let col = 0; col < 16; col++)
        {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            console.log("cell created")
        }
    }
}

window.onload = createSketchpad;