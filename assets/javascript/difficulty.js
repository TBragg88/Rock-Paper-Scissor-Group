let playerScore = 0;
let aiScore = 0;
const winTarget = 3;
let currentDifficulty = "medium";

const actions = ["rock", "paper", "scissors", "lizard", "spock"];
const winMap = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};

// ------------------- AI see's human input before making its decision ------------------------
function aiAction(playerMove) {
    if (currentDifficulty === "easy") {
        return winMap[playerMove][Math.floor(Math.random() * 2)]; // AI loses
    } else if (currentDifficulty === "hard") {
        const counters = actions.filter(move => winMap[move].includes(playerMove)); // AI wins
        return counters[Math.floor(Math.random() * counters.length)];
    }
    return actions[Math.floor(Math.random() * actions.length)]; // balanced RNG
}

// ------------------- Game outcome logic ------------------------
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

function checkWinCondition() {
    if (playerScore === winTarget || aiScore === winTarget) {
        setTimeout(() => {
            const msg = playerScore === winTarget
                ? "Congratulations! You won the match!"
                : "The computer wins the match!";
            showWinnerModal(msg);
        }, 100);
    }
}

// ------------------- Event Listeners ------------------------
document.querySelector(".game-buttons").addEventListener("click", function (e) {
    const move = e.target.id;
    if (!actions.includes(move)) return;

    const aiMove = aiAction(move);
    winner(move, aiMove);
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("winnerModal").style.display = "none";
    resetGame();
});

// ------------------- Modal and Reset ------------------------
function showWinnerModal(message) {
    document.getElementById("winnerMessage").textContent = message;
    document.getElementById("winnerModal").style.display = "flex";
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    updateUI("Best of 3!");
}

// ------------------- radials control ai input and avatar selcection------------------------
document.addEventListener("DOMContentLoaded", () => {
    const aiAvatar = document.getElementById("AI-Avatar");
    const difficulties = document.querySelectorAll('input[name="difficulty"]');
    const avatarMap = {
        easy: "assets/images/char-redshirt.png",
        medium: "assets/images/char-mccoy.png",
        hard: "assets/images/char-spok.png"
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