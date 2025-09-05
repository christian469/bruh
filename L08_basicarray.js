// write your codes here
let starwars;
let boolFlag;
let favFood;
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
    textAlign(CENTER, CENTER);
    // text("Uncle Roger",50, 50);
    // text("18",50, 100);
    // text("killing black people",50, 150);

  
    favFood = ["human blood", "pasta", "dogs", "human meat", "cork"];

    console.log(favFood[3]);
    console.log(favFood[0]);
    console.log(favFood[4]);
}
    for (let i = 0; i < favFood.length; i++){
        // console.log(i);
        console.log(favFood[i]);
        text(i+1 + "." + favFood[i], width/ 2, 100 + 1 * 50);
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




