// ----- HTML HOOK UP'S ------------

document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
});

//-------GAME RULES + FUNCTIONS --------
// ok we start the game , we need the "ai to select his choice secretly"
//player inputs his choice and its starts or requires button submit
// game compares two answers and returns who wins
// alert box or something to indicate winner?
//scores to be included
// "animation" of sad ai opponent and new game button ?

//computer choice

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

        message = winCon[playerAction].includes(aiChoice)
            ? `You win! ${playerAction} beats ${aiChoice}.`
            : `You lose! ${aiChoice} beats ${playerAction}.`;
    }
    document.getElementById("message-el").textContent = message;
};

// --------buttons and winner function -----------
document
    .querySelector(".game-buttons")
    .addEventListener("click", function (event) {
        const playerAction = event.target.id;
        const aiChoice = aiAction();
        winner(playerAction, aiChoice);
    });

// alert(result)
