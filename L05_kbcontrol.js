let rectsize;

function setup(){
    createCanvas(600,40000);
}

function draw(){
    backround('sliver');

    rectsize(width/2, height/2, rectsize, rectsize);
}

// keyPressed and keyReleased
function keyPressed(){
    rectsize = 100;
}
function keyReleased(){
    rectsize = 50;
}