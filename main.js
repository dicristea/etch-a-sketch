const container = document.getElementById("sketch-container");
const clearButton = document.getElementById("clear");
const rainbowBtn = document.getElementById('rainbow');
const colorBtn = document.getElementById('color');


// RAINBOW BUTTON
rainbowBtn.onclick = function randomColor() {
    let gridItem = document.querySelectorAll(".grid-item");
    let gridArray = Array.from(gridItem);
    gridArray.forEach(item => item.addEventListener('mouseenter', function(e) {
      item.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }));
};

// FILL COLOR
function fillColor() {
  let gridItem = document.querySelectorAll(".grid-item");
  let gridArray = Array.from(gridItem);
  gridArray.forEach(item => item.addEventListener('mouseenter', function(e) {
    item.style.backgroundColor = '#313131'; // "grid-item filled"
  }));
};

colorBtn.addEventListener('click', fillColor);

// MAKE SKETCH GRID
function makeRows(rows) {
  let cols = rows + 5
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  fillColor();
};

makeRows(16); // default


// CLEAR BUTTON
function clearGrid () {
  let gridItem = document.querySelectorAll(".grid-item");
  let gridArray = Array.from(gridItem);
  gridArray.forEach(item => item.style.backgroundColor = "whitesmoke");
};

clearButton.addEventListener('click', clearGrid);


// REFRESH GRID
let rowBtns = document.getElementsByClassName('sizing');
let rowArray = Array.from(rowBtns);

for (let i = 0; i < rowArray.length; i++) {
  rowArray[i].addEventListener('click', deleteGrid);

function deleteGrid(e) {
  container.innerHTML="";

  if (e.target.id == 'rows16') {
    makeRows(16);
  } else if (e.target.id == 'rows20') {
    makeRows(20);
  } else if (e.target.id == 'rows30') {
    makeRows(30);
  } else return "Falty";
 };
};
 