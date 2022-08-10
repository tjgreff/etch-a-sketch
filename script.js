const div = document.getElementById("container");

let createGrid = (num) => {
    // clear mainDiv content
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    // create rows
    for (let r = 0; r < num; r++) {
        let row = document.createElement("div");
        div.appendChild(row);

        // create squares as columns
        for (let c = 0; c < num; c++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id","squareId");
            row.appendChild(square);
        }
    }
}

div.addEventListener("mouseover", function( event ) {
  event.target.style.borderColor = "blue";
} , false);

div.addEventListener("mouseout", function( event ) {
    event.target.style.borderColor = "green"; 
  } , false);
