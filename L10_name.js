let displayText;
let inputText;
let inputName;
let displayAge;

function setup(){
    createCanvas(600,400)
    displayText = "Let Diddy sharpen ur pencil XD"

    inputText = createInput();
    inputText.position(100, height - 100);
    inputText.input(updateText);

     inputName = createInput();
    inputName.position(105, height - 150);
    inputName.input(updateText);

    inputAge = createInput();
    inputAge.position(300, height - 50);
    inputAge.input
}

function draw(){
    background('darkred')
    fill("white");
    textSize(19);
    textAlign(CENTER,CENTER)
    text(displayText, width/2, height/2);
    text(displayAge, width/2, height/2)

    text("Name", 80, 259);
    text("Age", 80, 310)
}




function updateText(){
    displayText = this.value();
}