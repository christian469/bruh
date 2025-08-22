let posx, posy;

function setup(){
    createCanvas(400, 400);
    posx = width / 2;
    posy = height / 2;
}

function draw(){
    background(220);
    rect(posx,posy, 30, 30); 
    
    
    if (keyIsDown(RIGHT_ARROW)){
        posx = posx + 5;
    }
    if (keyIsDown(LEFT_ARROW)){
        posx = posx - 5;
    }
    if (keyIsDown(UP_ARROW)){
        posy = posy - 5;
    }
    if (keyIsDown(DOWN_ARROW)){
        posy = posy + 5;
    }
    
    posx = constrain(posx, 0, width -30);
    posy = constrain(posy, 0, height - 30)
}
