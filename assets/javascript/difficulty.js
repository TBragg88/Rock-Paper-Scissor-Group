let playerScore = 0;
let aiScore = 0;
const winTarget = 5;
let currentDifficulty = "easy"; // default to easy

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
        // AI always loses: pick something player beats
        return winMap[playerMove][Math.floor(Math.random() * 2)];
    } else if (currentDifficulty === "hard") {
        // AI always wins: pick something that beats the player
        const counters = actions.filter((move) =>
            winMap[move].includes(playerMove)
        );
        return counters[Math.floor(Math.random() * counters.length)];
    }
    // Medium: random
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

function checkWinCondition() {
    if (playerScore === winTarget || aiScore === winTarget) {
        setTimeout(() => {
            const msg =
                playerScore === winTarget
                    ? "Congratulations! You won the match!"
                    : "The computer wins the match!";
            showWinnerModalDiff(msg);
        }, 100);
    }
}

// --------- Event Listeners ---------
document.querySelector(".game-buttons").addEventListener("click", function (e) {
    const move = e.target.id;
    if (!actions.includes(move)) return;
    const aiMove = aiAction(move);
    winner(move, aiMove);
});

document.getElementById("closeModalBtndiff").addEventListener("click", () => {
    document.getElementById("winnerModaldiff").style.display = "none";
    resetGame();
});

// --------- Modal and Reset ---------
function showWinnerModalDiff(message) {
    document.getElementById("winnerMessagediff").textContent = message;
    document.getElementById("winnerModaldiff").style.display = "flex";
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    updateUI("First to 5 wins! Start a new match.");
}

// --------- Difficulty radio & avatar logic ---------
document.addEventListener("DOMContentLoaded", () => {
    const aiAvatar = document.getElementById("AI-Avatar");
    const difficulties = document.querySelectorAll('input[name="difficulty"]');
    const avatarMap = {
        easy: "assets/images/char-redshirt.png",
        medium: "assets/images/char-mccoy.png",
        hard: "assets/images/char-spok.png",
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

    // Set avatar and difficulty on load
    const checked = document.querySelector('input[name="difficulty"]:checked');
    if (checked) updateDifficulty(checked.value);
});
