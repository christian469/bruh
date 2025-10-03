let displayText;
let inputText;

function setup(){
    createCanvas(600,400)
    displayText = "Let Diddy sharpen ur pencil XD"

    inputText = createInput();

}

function draw(){
    background('darkred')
    fill("white");
    textSize(24);
    textAlign(CENTER,CENTER);
    text(displayText, width/ 2, height/ 2);
}
