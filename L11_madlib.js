let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace;
let btnGenStory
let storyText, storyTemplate;

function setup(){
    createCanvas(600,600);
    inputNoun = createInput("e.g. Tytus");
    inputNoun.position(200, 100);

    inputVerb = createInput("e.g. swim");
    inputVerb.position(200,150);

    inputAdjective = createInput("e.g. happy");
    inputAdjective.position(200, 200);

    inputAdverb = createInput("e.g. happily");
    inputAdverb.position(200, 250);

    inputPlace = createInput("e.g. Ang Mo Kio");
    inputPlace.position (200, 300);

    btnGenStory = createButton("Generate Story");
    btnGenStory.position(200, 350);
    btnGenStory.mousePressed(buttonStoryClicked)

    storyTemplate = ["The {adjective} {noun} went {verb} at{place}.",
        "once upen time, a {noun} {verb} {adverb} at the {place}"
    ];

    ranstory = random(storyTemplate);

    storyText
}

function draw(){
    background("maroon");

    push();
    fill("orange");
    textSize(18);
    textAlign(LEFT, TOP);
    textFont("cosmic san")
    text("Noun:", 50, 100);
    text("Verb:", 50, 150);
    text("Adjective:", 50, 200);
    text("Adverb:", 50, 250);
    text("Place:", 50, 300);
    pop();
}

function buttonStoryClicked(){
    console.log("Tytus was on top of another guy in bed having a special type of fun without... with MrBeast while touching his pickle and goons to flat girls and Autistic flat girls") 
    console.log(inputNoun.value());
}
