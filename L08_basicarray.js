// write your codes here
let starwars;
let boolFlag;

// preload function
function preload(){
    starwars = loadSound("assets/star_wars_theme_8_bit.mp3");
}

// setup()
function  setup(){
    createCanvas(400, 400);
    background("brown");

    boolFlag = false;

    fill('black');
    textSize(30);
    text("Uncle Roger",50, 50);
    text("13",50, 100);
    text("killing black people",50, 150);
}

function draw(){

}


function mousePressed(){
    if (boolFlag){
        starwars.play();
    }
        
    else{
        starwars.stop();
    }

    boolFlag = !boolFlag
}

function mouseReleased(){
    starwars.stop();
}




