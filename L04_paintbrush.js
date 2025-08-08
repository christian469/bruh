let shapeColor;
let diameter = 5;

function setup() {
     createCanvas(1000, 10000);
     background('gray');
}

function draw(){
    //  circle(mouseX, mouseY, height/ 2, diameter);
}

function mousePressed(){
    // evertime mouse pressed, this code runs
    // shapeColor = 'red';
    shapeColor = color(random(255), random(225), 255);
    diameter = 5;
    // random(255)
}

function mouseDragged(){
    shapeColor = color(random(255), random(225), 255);
    fill(shapeColor);
    noStroke();
    circle(mouseX,  mouseY,  diameter); 
    diameter += 0.5;
}