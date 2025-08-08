let rectsize = 100;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background('sliver');

    rect(width/2, height/2, rectsize, rectsize);
}

// keyPressed and keyReleased
function keyPressed(){
    rectsize = 100;
}
function keyReleased(){
    rectsize = 50;
}

