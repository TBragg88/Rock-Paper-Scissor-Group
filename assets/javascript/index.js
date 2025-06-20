// -------------------Database hook up's-------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://rpsls-14063-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")


// ----- HTML HOOK UP'S ------------

document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("menuScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
});


// ---------GAME LOGIC ---------------

// Globar variables for player and ai scores
let playerScore = 0;
let aiScore = 0;
const winTarget = 3;
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

    // Check for match winner
    if (playerScore === winTarget || aiScore === winTarget) {
        setTimeout(() => {
            const winnerText = playerScore === winTarget
                ? "Congratulations! You won the match!"
                : "The computer wins the match!";
            showWinnerModal(winnerText);
        }, 100);
    }
};

// --------buttons and winner function -----------
document
    .querySelector(".game-buttons")
    .addEventListener("click", function (event) {
        const playerAction = event.target.id;
        const aiChoice = aiAction();
        winner(playerAction, aiChoice);
    });

// -------- Modal Logic --------
function showWinnerModal(message) {
    document.getElementById("winnerMessage").textContent = message;
    document.getElementById("winnerModal").style.display = "flex";
}

document.getElementById("closeModalBtn").addEventListener("click", function () {
    document.getElementById("winnerModal").style.display = "none";
    resetGame();
});

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = aiScore;
    document.getElementById("message-el").textContent = "First to 5 wins! Start a new match.";
}

