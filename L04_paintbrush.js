function setup() {
     createCanvas(1000, 1000);
     // background('gray');
}
function mousePressed(){
    // evertime mouse pressed, this code runs
//     shapeColor = 'red';
    shapeColor = color(random(255), random(225), 255);
    random(255)

    function mouseDragged(){

    }
    shapeColor = color(random(255), random(225), 255);
    fill(shapeColor);
    noStroke();
    circle(5, width / 2, height/ 2, diameter);
     }