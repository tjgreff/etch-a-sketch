const mainDiv = document.getElementById("main-container");

let createGrid = (num) => {
    // create rows
    for (let r = 0; r < num; r++) {
        let row = document.createElement("div");
        mainDiv.appendChild(row);

        // create squares as columns
        for (let c = 0; c < num; c++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id","squareId");
            row.appendChild(square);
        }
    }
}


// createGrid(num);

mainDiv.addEventListener("mouseover", function( event ) {
  event.target.style.borderColor = "blue";
} , false);

mainDiv.addEventListener("mouseout", function( event ) {
    event.target.style.borderColor = "green"; 
  } , false);
