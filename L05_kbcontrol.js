let rectsize = 100;
let cx, cy;

function setup(){
    createCanvas(1000,800);
    cx = width/2;
    cy = height/2;
}

function draw(){
    background('sliver'); 
   
    rect(cx, cy, rectsize, rectsize);
   
    if (keyIsDown(68)){
        cx = cx + 30;
    }
    else if(keyIsDown(65)){
        cx = cx - 10;
    }
}

// // keyPressed and keyReleased
// function keyPressed(){
//    if (key === 'a'){
//        rectsize = 100;
//    }
//    else if (key === 's'){
// } 
// function keyReleased(){
//      rectsize = 50;
// }


// }


// // let a = 1;
// // let b = "1";

// // if (a===b){
// //     console.log('lalala');
// //}


