let rectsize = 50;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background('sliver');

    rectsize(width/2, height/2, rectsize, rectsize);
}

// keyPressed and keyReleased
function keyPressed(){
    rectsize = 100;
}
function keyReleased(){
    rectsize = 50;
}