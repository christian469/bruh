let displayText;
let inputText;
let inputName;

function setup(){
    createCanvas(600,400)
    displayText = "Let Diddy sharpen ur pencil XD"

    inputText = createInput();
    inputText.position(100, height - 100);
    inputText.input(updateText);

     inputName = createInput();
    inputName.position(150, height - 150);
    inputName.input(updateText);
}

function draw(){
    background('darkred')
    fill("white");
    textSize(24);
    textAlign(CENTER,CENTER);
    text(displayText, width/ 2, height/ 2);
    text("name")
}




function updateText(){
    displayText = this.value();
}