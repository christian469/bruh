let displayText;
let inputText;
let inputname

function setup(){
    createCanvas(600,400)
    displayText = "Let Diddy sharpen ur pencil XD"

    inputText = createInput();
    inputText.position(100, height - 100);
    inputText.input(updateText);

     inputname = createInput();
    inputname.position(150, height - 150);
    inputname.input(updatename);
}

function draw(){
    background('darkred')
    fill("white");
    textSize(24);
    textAlign(CENTER,CENTER);
    text(displayText, width/ 2, height/ 2);
}




function updateText(){
    displayText = this.value();
}