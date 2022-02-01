//Selecting container for grid
const sketchContainer = document.querySelector('.sketchContainer');
sketchContainer.classList.add('sketchContainer');



//creates a grid with calles & specified dimensions when called
function createCells(columns, rows){

  for (let i = 0; i < (columns * rows); i++){
    const gridCell = document.createElement('div');
    gridCell.classList.add(`gridCell`);

    sketchContainer.appendChild(gridCell);

    sketchContainer.style.gridTemplateColumns = `repeat(${columns}, 20px)`;
    sketchContainer.style.gridTemplateRows = `repeat(${rows}, 20px)`;
  }
}
createCells(16, 16);



//changes cell background to black when mouseover
function colorBlack(){
  const pixels = document.querySelectorAll(`.gridCell`)
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = 'black';
    });
  });
}

//invokes colorBlack() when start drawing button is clicked
//refreshes page when clear sketch-pad button is clicked
const buttons = document.querySelectorAll('#draw, #clear');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'draw'){
      colorBlack();
    }
    else if (button.id == 'clear'){
      window.location.reload();
    }
  })
});

