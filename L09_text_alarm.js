let csecond, cminute, chour;
let ctime;
let interval;
letcountdown;
function setup(){
    createCanvas(600,400);
    textSize(80);
    textFont("Monospace")
    textAlign(CENTER, CENTER)
}

function draw(){
    background('white');
    csecond = second();
    cminute = minute();
    chour = hour();
    ctime = nf(chour,2) + " : " + nf(cminute,2) + " : " + nf(csecond,2)
    text(ctime, width/ 2, height/ 2);

    
}