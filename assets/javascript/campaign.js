let playerScore = 0;
let aiScore = 0;
const winTarget = 5;
const bossStages = ["easy", "medium", "hard"];
let currentStageIndex = 0;
let currentDifficulty = bossStages[currentStageIndex];
let buttonsLocked = false;

const actions = ["rock", "paper", "scissors", "lizard", "spock"];

const winMap = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};

const avatarMap = {
    easy: "assets/images/char-redshirt.png",
    medium: "assets/images/char-sulu.png",
    hard: "assets/images/char-spock.png",
};

const bannerMap = {
    easy: "Your journey begins… face the Redshirt!",
    medium: "Lieutenant Sulu steps up — precision and steel!",
    hard: "Spock awaits. Your logic will be tested.",
};

const transitionMap = {
    easy: "🚀 Sulu enters the bridge. Brace yourself!",
    medium: "🖖 Spock approaches. Logic is your final test.",
    hard: "🏆 You have mastered the Vulcan Mind Challenge! 🖖",
};

// ---------- AI Logic ----------
function aiAction(playerMove) {
    if (currentDifficulty === "easy") {
        const losingMoves = actions.filter(move => winMap[playerMove].includes(move));
        return losingMoves[Math.floor(Math.random() * losingMoves.length)];
    } else if (currentDifficulty === "hard") {
        const winningMoves = actions.filter(move => winMap[move].includes(playerMove));
        return winningMoves[Math.floor(Math.random() * winningMoves.length)];
    }
    return actions[Math.floor(Math.random() * actions.length)];
}

// ---------- Gameplay ----------
function winner(playerMove, aiMove) {
    if (buttonsLocked) return;

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
        buttonsLocked = true;
        setTimeout(() => {
            const playerWon = playerScore === winTarget;
            const outcome = playerWon
                ? `🎉 You beat the ${currentDifficulty.toUpperCase()} boss!`
                : `💀 You lost to the ${currentDifficulty.toUpperCase()} boss.`;
            showModal(outcome, playerWon);
        }, 300);
    }
}

// ---------- Modal + Progression ----------
function showModal(outcome, playerWon) {
    const modal = document.getElementById("winnersModalBoss");
    let message;

    if (playerWon) {
        message = `${outcome}\n\n${transitionMap[currentDifficulty]}`;
    } else {
        message = `${outcome}\n\n🔄 Restarting from the beginning...`;
    }

    document.getElementById("win-msg-boss").innerHTML = message.replace(/\n/g, "<br>");

    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();

    setTimeout(() => {
        bsModal.hide();

        if (playerWon) {
            if (currentStageIndex < bossStages.length - 1) {
                currentStageIndex++;
                currentDifficulty = bossStages[currentStageIndex];
                resetGame();
            } else {
                document.getElementById("message-el").textContent =
                    "🖖 Mission Complete! You are a true Vulcan Mind Master!";
                document.getElementById("bannerP").textContent =
                    "🏆 VICTORY! You have conquered all challenges!";
                const gameButtons = document.querySelector(".game-buttons");
                if (gameButtons) {
                    gameButtons.style.display = "none";
                }
                buttonsLocked = true;
            }
        } else {
            currentStageIndex = 0;
            currentDifficulty = bossStages[currentStageIndex];
            resetGame();
        }
    }, 3000);
}

// ---------- Reset UI ----------
function resetGame() {
    playerScore = 0;
    aiScore = 0;
    buttonsLocked = false;

    const gameButtons = document.querySelector(".game-buttons");
    if (gameButtons) {
        gameButtons.style.display = "flex";
    }

    updateUI(`First to 5 wins! You're facing the ${currentDifficulty.toUpperCase()} boss.`);
    updateAvatar();
    updateBanner();
}

function updateAvatar() {
    const avatar = document.getElementById("AI-Avatar");
    if (avatar) {
        avatar.src = avatarMap[currentDifficulty];
        console.log("Avatar updated to:", avatar.src);
    }
}

function updateBanner() {
    const banner = document.getElementById("bannerP");
    if (banner) {
        banner.textContent = bannerMap[currentDifficulty];
    }
}

// ---------- Event Listeners ----------
document.addEventListener("DOMContentLoaded", () => {
    resetGame();
});

document.querySelector(".game-buttons").addEventListener("click", (e) => {
    const move = e.target.id;
    if (!actions.includes(move) || buttonsLocked) return;

    const aiMove = aiAction(move);
    winner(move, aiMove);
});

document.getElementById("closeModalBtnBoss").addEventListener("click", () => {
    const modal = bootstrap.Modal.getInstance(
        document.getElementById("winnersModalBoss")
    );
    if (modal) {
        modal.hide();
    }
});
