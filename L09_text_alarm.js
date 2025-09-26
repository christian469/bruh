let csecond, cminute, chour;
let ctime;
function setup(){
    createCanvas(600,400);
    textSize(50);
}

function draw(){
    background('pink');
    csecond = second();
    cminute = minute();
    chour = hour();
    ctime = nf(chour, 2) + " : " + cminute + " : " + csecond
    text(ctime, width/ 2, height/ 2);
}