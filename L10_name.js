let displayText;
let inputText;

function setup(){
    createCanvas(600,400)
    displayText = "Let Diddy sharpen ur pencil XD"

    inputText = createInput();
    inputText.position(100, height - 100);
    input
}

function draw(){
    background('darkred')
    fill("white");
    textSize(24);
    textAlign(CENTER,CENTER);
    text(displayText, width/ 2, height/ 2);
}
