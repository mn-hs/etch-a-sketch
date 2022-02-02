//Selecting container for grid
const sketchContainer = document.querySelector('.sketchContainer');
sketchContainer.classList.add('sketchContainer');

//Storing prompt for gridSize
gridSize =  ''



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
createCells(20, 20);

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let randomColor = generateRandomColor();

function colorRandom(){
  const pixels = document.querySelectorAll(`.gridCell`)
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = randomColor;
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

