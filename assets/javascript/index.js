// ----- HTML HOOK UP'S ------------

document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
});

/*-------GAME RULES + FUNCTIONS --------
ok we start the game , we need the "ai to select his choice secretly" 
- choice is made when player chooses his so no dom cheating.✔️

player inputs his choice and its starts or requires button submit 
games starts on choice✔️

game compares two answers and returns who wins✔️
alert box or something to indicate winner?✔️
scores to be included✔️
"animation" of sad ai opponent and new game button ?
------------------------------------------------
find a way to provide a score incremental to score board
impliment without breaking,
change "ai to be looking at player choice 
and then react accordingly (red shirt lose, spock win)


so global variables for player score and ai score✔️
increment score based on winner function
display scores in the message box
add a reset button to reset scores and game state?
maybe save high scores in local storage?
*/

// ---------GAME LOGIC ---------------

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

