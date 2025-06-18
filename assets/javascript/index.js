// ----- HTML HOOK UP'S ------------

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("menuScreen").style.display = "none";  // Hide menu
    document.getElementById("gameScreen").style.display = "block"; // Show game
});

//-------GAME RULES + FUNCTIONS --------

// ok we start the game , we need the "ai to select his choice secretly"
//player inputs his choice and its starts or requires button submit
// game compares two answers and returns who wins
// alert box or something to indicate winner?
//scores to be alterated
// "animation" of sad ai opponent and new game button ?

//computer choice

function aiAction() {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    return actions[Math.floor(Math.random() * actions.length)];
}
console.log("AI Action:", aiAction());

// Event listener for buttons
document.querySelector(".game-buttons").addEventListener("click", function(event) {
    console.log("Human Action", event.target.id);
});
console.log()
// Compare moves and determine winner
function winner(playerAction, aiChoice) {
    const winCon = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"],
    };

    if (playerAction === aiChoice) {
        return `Draw! Both chose ${aiChoice}.`;
    } else if (winCon[playerAction].includes(aiChoice)) {
        return `You win! ${playerAction} beats ${aiChoice}.`;
    } else {
        return `You lose! ${aiChoice} beats ${playerAction}.`;
    }
}
// alert(result)








