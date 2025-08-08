let rectsize = 100;
let cx, cy;

function setup(){
    createCanvas(600,400);
    cx = width/2;
    cy = height/2;
}

function draw(){
    background('sliver'); 
    rect(cx, cy, rectsize, rectsize);
   
    if (keyIsDown(68)){
        cx = cx + 1;
    }
    else if(keyIsDown(LEFT_ARROW)){
        cx
 
    }
}

// keyPressed and keyReleased
function keyPressed(){
   if (key === 'a'){
       rectsize = 100;
   }
   else if (key === 's'){
} 
function keyReleased(){
     rectsize = 50;
}


}


// let a = 1;
// let b = "1";

// if (a===b){
//     console.log('lalala');
//}


