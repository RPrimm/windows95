var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//change thing variables
var canvasWidth = 800;
var canvasHeight = 800;
var cellSize = 10;
var arraySize = 80;
var density = 0.4;
var FPS = 60;

//make screen black
ctx.fillRect(0, 0, canvasWidth, canvasHeight);
//make 2d array
var cellArray = new Array(arraySize);
for(var i = 0; i < arraySize; i++) {
    cellArray[i] = new Array(arraySize);
}
//fill 2d array
for(var i = 0; i < arraySize; i++){
    for(var j = 0; j < arraySize; j++){
        var random = Math.random();
        if(random < density){
            cellArray[i][j] = 1;
        }else {
            cellArray[i][j] = 0;
        }
    }
}
ctx.fillStyle = '#FFFFFF';
//draw 2d array
for(var i = 0; i < arraySize; i++){
    for(var j = 0; j < arraySize; j++){
        if(cellArray[i][j] == 1){
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize); 
        }
    }
}

//make 2d array
var updateArray = new Array(arraySize);
for(var i = 0; i < arraySize; i++) {
    updateArray[i] = new Array(arraySize)
}

function update() {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    //apply rules of the game
    for(var i = 0; i < arraySize; i++){
        for(var j = 0; j < arraySize; j++){
            neighbors = getNeighbors(i, j);
            if(cellArray[i][j] == 1){
                //rule 1
                if(neighbors == 2 || neighbors == 3){
                    updateArray[i][j] = 1;
                //rule 3
                }else{
                    updateArray[i][j] = 0;
                }
            }else {
                //rule 2
                if(neighbors == 3){
                    updateArray[i][j] = 1;
                //rule 4
                }else {
                    updateArray[i][j] = 0;
                }
            }
        }
    }
    for(var i = 0; i < arraySize; i++){
        for(var j = 0; j < arraySize; j++){
            cellArray[i][j] = updateArray[i][j];
        }
    }
    //draw 2d array
    ctx.fillStyle = '#FFFFFF';
    for(var i = 0; i < arraySize; i++){
        for(var j = 0; j < arraySize; j++){
            if(cellArray[i][j] == 1){
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize); 
            }
        }
    }
} setInterval(update, 1000/FPS)

function getNeighbors(i, j) {
    neighbors = 0;
    for(var k = -1; k <= 1; k++){
        for(var r = -1; r <= 1; r++){
            if(i + k == -1 || i + k == arraySize || j + r == -1 || 
                j + r == arraySize || (i + k == i && j + r == j)) {
                
            }else {
                neighbors += cellArray[i + k][j + r];
            }
        }
    }
    return neighbors
}
