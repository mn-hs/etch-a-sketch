//Selecting container for grid
const sketchContainer = document.querySelector('.sketchContainer');
sketchContainer.classList.add('sketchContainer');



//creates a grid with cells & specified dimensions when called
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


//creates random number to correspond with rgb 
let r = () => Math.random() * 256 >> 0;


//colors w/ random color whenever mouseover
function colorRandom(){
  const pixels = document.querySelectorAll(`.gridCell`)
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
    });
  });
}

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
//refreshes page when clear sketch-pad button is clicked & asks for new grid size
const buttons = document.querySelectorAll('#drawBlack, #drawColor, #clear');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 'drawBlack'){
      colorBlack();
    }
    else if (button.id == 'clear') {
      window.location.reload();
    }
    else if (button.id == 'drawColor'){
      colorRandom();
    }
  })
});

//Invokes createCells based on dropdown Selection
const gridSize = document.getElementById('gridSize');
gridSize.addEventListener('change', () => {
  if (gridSize.value == '16X16'){
    createCells(16, 16);
  }
  else if (gridSize.value == '17X17'){
    createCells(17, 17);
  }
  else if (gridSize.value == '18X18'){
    createCells(18, 18);
  }
  else if (gridSize.value == '19X19'){
    createCells(19, 19);
  }
  else {
    createCells(20, 20);
  }
});

