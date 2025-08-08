function setup() {
     createCanvas(1000, 1000);
     // background('gray');
}

function mouseDragged(){
    shapeColor = color(random(255), random(225), 255);
    fill(shapeColor);
    noStroke();
    circle(5/ 2, height/ 2, diameter);
}