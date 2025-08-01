let shapeColor = 'blue'; // variable
let diameter = 0
function setup() {
     createCanvas(1000, 1000);
     // background('');
}

function draw() {
      background('');
    fill(shapeColor); // calling the fill
    circle(width / 2, height/ 2, diameter);
}


function mousePressed(){
    // evertime mouse pressed, this code runs
//     shapeColor = 'red';
    shapeColor = color(random(255), random(225), 255);
    // random(255)
}

// mousReleased
function mouseReleased(){
     shapeColor = 'blue';
}

function mouseMoved(){
     
     diameter = mouseY;
}

function mouseDragged(){
    shapeColor = color(random(255), random(225), 255);
    fill(shapeColor);
    noStroke();
    circle(mouseX+random(-10,10), mouseY+random(-10,10), random(20));    
}