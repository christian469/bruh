let picoImg, bgMusic, soundPop;
let posx, posy



function preload(){
    picoImg = loadImage(`assets/pico-a.png`);
    bgMusic = loadSound(`assets/star_wars_theme_8_bit.mp3`);
    soundPop = loadSound(`assets/pop.mp3`);
}


function setup(){
    createCanvas(600, 400);
    background("lightblue");
    bgMusic.loop();
    posx = 300;
    posy = 200;
}


function draw(){
    image(picoImg, posx, posy, 110, 133);

    if (keyIsDown(RIGHT_ARROW)){
        posx += 5;
    }
    if (keyIsDown(LEFT_ARROW)){
        posx -= 5;
    }
}

function keyPressed(){
    soundPop.play();
}
function mousepressed(){
    soundPop.play();
}
