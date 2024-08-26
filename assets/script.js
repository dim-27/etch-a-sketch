const container = document.querySelector("#container");
const clearBtn = document.querySelector('#clear')

/* creating grid format for the sketch area */
function createGrid(size) {
  const sketchSize = 700;
  const squareSize = Math.floor(sketchSize/size);
  
  /* implementing two for loops for creating grid */
  /* first loop */
  for(let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    /* second loop */
    for (let j = 0; j < size; j++) {
      const grid = document.createElement('div');
      grid.setAttribute('class', 'grid');
      
      /* create grid square size */
      grid.style.width = `${squareSize}px`;
      grid.style.height = `${squareSize}px`;

      /* add row as a child to grid
        add row as a child to container
      */
      row.appendChild(grid);
      container.appendChild(row);

      /* implement hovering color function */
      addColorHover(grid);
    }
  }
}


function addColorHover(getGrid) {
  getGrid.addEventListener('mouseover', () => {
    getGrid.style.backgroundColor = getRandomRGB();
  })
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`
}

/* initial grid */
createGrid(16)

/* clear grid */
clearBtn.addEventListener('click', () => {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.style.backgroundColor = 'transparent';
  })
})
