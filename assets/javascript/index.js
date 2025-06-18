// ----- HTML HOOK UP'S ------------

document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("menuScreen").style.display = "none";  // Hide menu
    document.getElementById("gameScreen").style.display = "block"; // Show game
});


// buttons listening and shit.

//-------GAME RULES + FUNCTIONS --------

// ok we start the game , we need the "ai to select his choice secretly"
//player inputs his choice and its starts or requires button submit
// game compares two answers and returns who wins
// alert box or something to indicate winner?
//scores to be alterated
// "animation" of sad ai opponent and new game button ?

//computer choice
function aiAction() {
    const action = ["rock", "paper", "scissors", "lizard", "spock"];
    return action[Math.floor(Math.random() * action.length)];
}
console.log("the ai chose ",aiAction());


//button input
const playerAction = "rock";

//game start
//compare
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
console.log(winner(playerAction, aiAction()))
const result = winner(playerAction, aiAction())
console.log(result)
// alert(result)







