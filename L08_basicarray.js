// write your codes here
let starwars;
// preload function
function preload(){
    starwars = loadsound('assets/star_wars_theme_8_bit.mp3');
}

// setup()
function  setup(){
    createCanvas(600, 400);
    background("black");
}

function draw(){

}


function mousePressed(){
    starwars.play();
}

function mouseReleased(){
    starwars.stop();
}