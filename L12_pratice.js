heroes = ["bonnie", "chica", "freddy", "ballon boy", "foxy", "diddy", "smexyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy worker"]


function setup(){
    createCanvas(400, 600);
    background('maroon')

    
}
function draw(){
    for (let i = 0; i < heroes.length; i++){
    // console.log("Heroes: " +heroes[i]);
    text(heroes[i], 100, width/ 2, 100 + 1 * 50);

}

}