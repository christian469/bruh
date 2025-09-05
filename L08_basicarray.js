// write your codes here
let starwars;
let boolFlag;

// preload function
function preload(){
    starwars = loadSound("assets/star_wars_theme_8_bit.mp3");
}

// setup()
function  setup(){
    createCanvas(600, 400);
    background("black");

    boolFlag = false;
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

// function mouseReleased(){
//     starwars.stop();
// }

