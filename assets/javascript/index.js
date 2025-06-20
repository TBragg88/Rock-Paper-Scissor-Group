// -------------------Firebase Setup-------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://rpsls-14063-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const leaderboardRef = ref(database, "leaderboard");

// -------------------Game State-------------------
let playerScore = 0;
let aiScore = 0;
const winTarget = 5;

// -------------------AI Logic-------------------
const aiAction = () => {
    const actions = ["rock", "paper", "scissors", "lizard", "spock"];
    return actions[Math.floor(Math.random() * actions.length)];
};

// -------------------Winner Logic-------------------
const winner = (playerAction, aiChoice) => {
    const winCon = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"],
    };

    let message;

    if (playerAction === aiChoice) {
        message = `Draw! Both chose ${aiChoice}.`;
    } else if (winCon[playerAction].includes(aiChoice)) {
        message = `You win! ${playerAction} beats ${aiChoice}.`;
        playerScore++;
    } else {
        message = `You lose! ${aiChoice} beats ${playerAction}.`;
        aiScore++;
    }

    document.getElementById("message-el").textContent = message;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = aiScore;

    if (aiScore === winTarget) {
        setTimeout(() => {
            showWinnerModal("You held out well! put your name in the leaderboard!");
        }, 100);
    }
};

// -------------------Modal Logic-------------------
const showWinnerModal = (message) => {
    document.getElementById("winnerMessage").textContent = message;
    document.getElementById("winnerModal").style.display = "flex";
};

// -------------------Leaderboard Rendering-------------------
onValue(leaderboardRef, (snapshot) => {
    const data = snapshot.val();
    const leaderboardList = document.getElementById("leaderboardList");
    leaderboardList.innerHTML = "";

    if (data) {
        const sorted = Object.values(data).sort((a, b) => b.score - a.score);
        sorted.slice(0, 5).forEach((entry) => {
            const li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.score}`;
            leaderboardList.appendChild(li);
        });
    }
});

// -------------------Reset Logic-------------------
const resetGame = () => {
    playerScore = 0;
    aiScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = aiScore;
    document.getElementById("message-el").textContent =
        "First to 5 wins! Start a new match.";
};

// -------------------Event Listeners-------------------
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startButton");
    const gameButtons = document.querySelector(".game-buttons");
    const submitBtn = document.getElementById("submitScoreBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    if (startBtn) {
        startBtn.addEventListener("click", () => {
            document.getElementById("menuScreen").style.display = "none";
            document.getElementById("gameScreen").style.display = "block";
        });
    }

    if (gameButtons) {
        gameButtons.addEventListener("click", (event) => {
            const playerAction = event.target.id;
            if (
                ["rock", "paper", "scissors", "lizard", "spock"].includes(
                    playerAction
                )
            ) {
                const aiChoice = aiAction();
                winner(playerAction, aiChoice);
            }
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const playerName =
                document.getElementById("playerNameInput").value || "Unknown Player";
            push(leaderboardRef, {
                name: playerName,
                score: playerScore,
                timestamp: Date.now(),
            }).then(() => {
                alert("Score submitted!");
                document.getElementById("playerNameInput").value = "";
                document.getElementById("winnerModal").style.display = "none";
                resetGame();
            });
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            document.getElementById("winnerModal").style.display = "none";
            resetGame();
        });
    }
});