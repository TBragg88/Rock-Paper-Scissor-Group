/* jshint esversion: 6 */
let playerScore = 0;
let aiScore = 0;
const winTarget = 5;
let currentDifficulty = "easy";

const actions = ["rock", "paper", "scissors", "lizard", "spock"];
const winMap = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};

// --------- AI logic per difficulty ---------
function aiAction(playerMove) {
    if (currentDifficulty === "easy") {
        return winMap[playerMove][Math.floor(Math.random() * 2)];
    } else if (currentDifficulty === "hard") {
        const counters = actions.filter(move => winMap[move].includes(playerMove));
        return counters[Math.floor(Math.random() * counters.length)];
    }
    return actions[Math.floor(Math.random() * actions.length)];
}

// --------- Game outcome logic ---------
function winner(playerMove, aiMove) {
    let message;
    if (playerMove === aiMove) {
        message = `Draw! Both chose ${aiMove}.`;
    } else if (winMap[playerMove].includes(aiMove)) {
        message = `You win! ${playerMove} beats ${aiMove}.`;
        playerScore++;
    } else {
        message = `You lose! ${aiMove} beats ${playerMove}.`;
        aiScore++;
    }
    updateUI(message);
    checkWinCondition();
}

function updateUI(message) {
    document.getElementById("message-el").textContent = message;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = aiScore;
}

// --------- Win condition and modal ---------
function checkWinCondition() {
    if (playerScore === winTarget || aiScore === winTarget) {
        setTimeout(() => {
            const resultMsg = playerScore === winTarget
                ? "Congratulations! You won the match!"
                : "The computer wins the match!";
            showWinnerModalDiff(resultMsg);
        }, 100);
    }
}

function showWinnerModalDiff(message) {
    const winMsg = message.includes("won")
        ? "Congratulations you won! play again"
        : "Bad luck, try again!";

    document.getElementById("win-msg-diff").textContent = winMsg;

    const modal = document.getElementById("winnerModaldiff");
    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
}

document.getElementById("closeModalBtndiff").addEventListener("click", () => {
    const modal = document.getElementById("winnerModaldiff");
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
    resetGame();
});

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    updateUI("First to 5 wins! Start a new match.");
}

// --------- Event Listeners ---------
document.querySelector(".game-buttons").addEventListener("click", function (e) {
    const move = e.target.id;
    if (!actions.includes(move)) return;
    const aiMove = aiAction(move);
    winner(move, aiMove);
});

// --------- Difficulty and Avatar Controls ---------
document.addEventListener("DOMContentLoaded", () => {
    const aiAvatar = document.getElementById("AI-Avatar");
    const difficulties = document.querySelectorAll('input[name="difficulty"]');
    const avatarMap = {
        easy: "assets/images/char-redshirt.png",
        medium: "assets/images/char-mccoy.png",
        hard: "assets/images/char-spock.png",
    };

    function updateDifficulty(value) {
        if (avatarMap[value]) {
            aiAvatar.src = avatarMap[value];
            currentDifficulty = value;
        }
    }

    difficulties.forEach((radio) =>
        radio.addEventListener("change", () => updateDifficulty(radio.value))
    );

    const checked = document.querySelector('input[name="difficulty"]:checked');
    if (checked) updateDifficulty(checked.value);
});