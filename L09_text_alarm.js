let csecond;

function setup(){
    createCanvas(600,400);
    textSize();
}

function draw(){
    background('pink');
    csecond = second();
    text(csecond, width/ 2, height/ 2);
}