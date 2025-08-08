let rectsize = 100;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background('sliver');
    // rect(width/2, height/2, rectsize, rectsize);
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


