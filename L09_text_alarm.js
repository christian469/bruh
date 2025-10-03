let csecond, cminute, chour;
let ctime;
let interval;
let countdown;

let alarm;

function preload(){
    alarm = loadSound('assets/Lose.mp3')
}



function setup(){
    createCanvas(600,400);
    textSize(80);
    textFont("cosmic san")
    textAlign(CENTER, CENTER)
    countdown = 666;
}

function draw(){
    background('brown');
    csecond = second();
    cminute = minute();
    chour = hour();
    ctime = nf(chour,2) + " : " + nf(cminute,2) + " : " + nf(csecond,2)
    text(ctime, width/ 2, height/ 2);
    text(countdown, width/2, height/2 +100)
}

function mousePressed(){
    interval = setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    if (countdown > 0){
    countdown = countdown - 1;
    }
    else{
        clearInterval(interval);
        alarm.play();
    }
}