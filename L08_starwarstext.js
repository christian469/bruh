// write your codes here

let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];



function setup(){
    createCanvas(600,400);
    ypos = height/2;
}


function draw(){
    background('black');
    fill("yellow");
    textSize(16);
    textAlign(CENTER,CENTER);

    // text("go search up unbanned G+ and play CS chicken", width/ 2, height/ 2);

    for (let i = 0; i < storyText.length; i++){

         let sentence = storyText[i];

         text(sentence, width/2, ypos + i * 20);
    }

    ypos = ypos - 1;
}