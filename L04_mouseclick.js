let shapeColour = 'blue'; // variable
let diameter = 0
function setup() {
     createCanvas(1000, 1000);
     // background('');
}

function draw() {
      background('');
    fill(shapeColour); // calling the fill
    circle(width / 2, height/ 2, diameter);
}


function mousePressed(){
    // evertime mouse pressed, this code runs
//     shapeColor = 'red';
    shapeColour = color(random(255), random(225), 255);
    // random(255)
}

// mousReleased
function mouseReleased(){
     shapeColour = 'blue';
}

function mouseMoved(){
     
     diameter = mouseY;
}

function mouseMoved(){
    shapeColour = color(random(255), random(225), 255);
    fill(shapeColor);
    noStroke();
    circle    
}