let csecond, cminute, chour;
let ctime;
let interval;
letcountdown;
function setup(){
    createCanvas(600,400);
    textSize(80);
    textFont("cosmic san")
    textAlign(CENTER, CENTER)
    countdown = 100;
}

function draw(){
    background('white');
    csecond = second();
    cminute = minute();
    chour = hour();
    ctime = nf(chour,2) + " : " + nf(cminute,2) + " : " + nf(csecond,2)
    text(ctime, width/ 2, height/ 2);
    text(countdown, width/2, height/2 +100)
}

function mousePressed(){
    
    interval = setInterval(updateCountdown, 1000)
}