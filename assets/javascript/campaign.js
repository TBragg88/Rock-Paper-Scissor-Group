
// Globar variables for player and ai scores
let playerScore = 0;
let aiScore = 0;
let isAlive = true


//Kirk level "ai" rng win and lose conditions
const aiAction = function aiAction() {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    return actions[Math.floor(Math.random() * actions.length)];
};

// Compare moves and determine winner
let winner = function (playerAction, aiChoice) {
    let message;
    if (playerAction === aiChoice) {
        message = `Draw! Both chose ${aiChoice}.`;
    } else {
        const winCon = {
            rock: ["scissors", "lizard"],
            paper: ["rock", "spock"],
            scissors: ["paper", "lizard"],
            lizard: ["spock", "paper"],
            spock: ["scissors", "rock"],
        };

        // message = winCon[playerAction].includes(aiChoice)
        //     ? `You win! ${playerAction} beats ${aiChoice}.`
        //     : `You lose! ${aiChoice} beats ${playerAction}.`;

        if (winCon[playerAction].includes(aiChoice)) {
            message = `You win! ${playerAction} beats ${aiChoice}.`;
            playerScore++;
        } else {
            message = `You lose! ${aiChoice} beats ${playerAction}.`;
            aiScore++;
        }
    }
    document.getElementById("message-el").textContent = message;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = aiScore;
};

// --------buttons and winner function -----------
document
    .querySelector(".game-buttons")
    .addEventListener("click", function (event) {
        const playerAction = event.target.id;
        const aiChoice = aiAction();
        winner(playerAction, aiChoice);
    });



