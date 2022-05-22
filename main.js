// MAKE SKETCH GRID
const container = document.getElementById("sketch-container");

function randomColor() {
    // return "#" + Math.floor(Math.random()*16777215).toString(16);
    // this returns fewer colors but they are all nice and bright
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
};

function makeRows(rows) {
  let cols = rows + 5
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16);

// COLOR FILL
let gridItem = document.querySelectorAll(".grid-item");
let gridArray = Array.from(gridItem);

gridArray.forEach(item => item.addEventListener('mouseenter', function(e) {
    item.className = "grid-item filled";
}));


// CLEAR BUTTON
let clearButton = document.getElementById("clear");

function clearGrid () {
    gridArray.forEach(item => item.className = "grid-item");
};

clearButton.addEventListener('click', clearGrid);
