document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("menuScreen").style.display = "none";  
    document.getElementById("gameScreen").style.display = "block"; 
});
// AI randomly selects a move
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








