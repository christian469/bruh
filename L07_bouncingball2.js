let ballX = 300;
let ballY = 200;
let ballXspeed = 9;
let ballYspeed = 9;
let ballWidth = 13;



function setup(){
    createCanvas(600, 400);
}


function draw(){
    // background('black');
    noStroke();
  

ballX = ballX + ballXspeed;


if (ballX + ballWidth/ 2>= width || ballX - ballWidth/ 2 <= 0){
    fill(random(255), random(255), random(255));
    ballXspeed = ballXspeed * -1;
}


ballY = ballY + ballYspeed;
if (ballY + ballWidth/ 2 >= height || ballY - ballWidth/ 2 <= 0){
    fill(random(255), random(255), random(255));
    ballYspeed = ballYspeed * -1;
}


    circle(ballX, ballY, ballWidth);
}