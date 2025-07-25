function setup() {
    createCanvas(2500, 4000);
    background(220);
    noLoop(); // Stops continuous drawing
  }
//i=10
//b=20
//c=i + b
//print(c)

let i = 10;
let b = 20;
let c = i + b;

for (let i = 0; i < 10; i++){
  console.log(i);
}



//print out numbers from 0 to 9

console.log(c);
function draw() {
  // Recap 1: Repeating Circles
    // circle(100,100,50);
    // circle(200,100,50);
    // circle(300,100,50);
    // circle(400,100,50);
     
        circle(50 * i, 25, 50);
    for(let i = 1; i <= 20; i++){
      if (i % 2 === 0){
         fill(0);
        
        }
        else{
          fill(225); //white
        }
        circle(100 * i, 100, 50);
    }
  
         // }











  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}
        













