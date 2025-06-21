# Challenge of the Vulcan Mind

A Star Trek–themed Rock-Paper-Scissors-Lizard-Spock game with multiple play modes, real-time leaderboard, and a modern, responsive UI. Built with HTML, CSS (Bootstrap), and JavaScript.

---

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Game Modes](#game-modes)
-   [How to Play](#how-to-play)
-   [Screenshots](#screenshots)
-   [Leaderboard](#leaderboard)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Firebase Setup](#firebase-setup)
-   [Technologies Used](#technologies-used)
-   [Development & Planning](#development--planning)
-   [Known Issues / Roadmap](#known-issues--roadmap)
-   [Contributing](#contributing)
-   [Credits](#credits)
-   [License](#license)

---

## About

**Challenge of the Vulcan Mind** is a browser-based game inspired by Rock-Paper-Scissors-Lizard-Spock, with a Star Trek twist. Play classic, campaign, or versus modes, and challenge your logic against the computer or friends. Compete for high scores on a real-time leaderboard powered by Firebase.

---

## Features

-   ✅ Classic Rock-Paper-Scissors-Lizard-Spock gameplay
-   ✅ Real-time leaderboard (Firebase)
-   ✅ Multiple game modes: Classic, Campaign, Choose Opponent
-   ✅ Adjustable AI difficulty (Easy, Medium, Hard)
-   ✅ Responsive design (mobile-friendly)
-   ✅ Modal with game rules and explanations
-   ✅ Themed UI with Bootstrap and custom styles
-   ✅ Animated feedback and sound effects (in progress)
-   ✅ Star Trek avatars and color themes

---

## Game Modes

-   **Classic Game:** Standard play against the computer (Kirk AI).
-   **Campaign:** Face a series of increasingly difficult AI opponents.
-   **Choose Opponent:** Play against a friend or select your AI rival (Redshirt, Kirk, Spock).
-   **Difficulty:** Select Easy (AI loses), Medium (random), or Hard (AI tries to win).

---

## How to Play

1. Select a game mode from the main menu.
2. Choose your move: Rock, Paper, Scissors, Lizard, or Spock.
3. The winner is determined by the classic rules (see the Rules modal for details).
4. In Campaign mode, win rounds to advance.
5. In Choose Opponent, select your rival and compete.
6. After a match, submit your name to the leaderboard and see how you rank!

---

## Screenshots

<!-- Add your screenshots or GIFs here -->
<img src="readme-documentation/wireframes/Home-page.png" alt="Home Wireframe" width="600" />
<img src="readme-documentation/wireframes/Phone.png" alt="Mobile Wireframe" width="300" />
<img src="readme-documentation/wireframes/Play-page.png" alt="Play Wireframe" width="600" />

---

## Leaderboard

Compete for the top score! After each game, enter your name to submit your score to the global leaderboard. The leaderboard updates in real time using Firebase.

---

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/rock-paper-scissor-group.git
    ```
2. **Open `index.html` in your browser.**

---

## Usage

-   Click the desired game mode.
-   Follow on-screen instructions.
-   Use the "Rules" button to view game rules at any time.
-   After a match, enter your name and submit your score to the leaderboard.

---

## Firebase Setup

To enable the real-time leaderboard for your own deployment:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable the Realtime Database and set rules to:
    ```json
    {
        "rules": {
            ".read": true,
            ".write": true
        }
    }
    ```
3. Replace the `firebaseConfig` in `assets/javascript/index.js` with your own config.
4. Open `index.html` in your browser.

---

## Technologies Used

-   HTML5
-   CSS3 (Bootstrap 5)
-   JavaScript (ES6)
-   [Firebase Realtime Database](https://firebase.google.com/)
-   [FontAwesome](https://fontawesome.com/) for icons

---

## Development & Planning

See [PLANNING.MD](PLANNING.MD) for a full breakdown of project phases, features, and roadmap.

**Highlights:**

-   MVP: Core game logic, UI, and session-based scoring.
-   Enhancements: Animations, sound, difficulty, multiplayer, leaderboards.
-   Stretch Goals: Custom rules, story mode, power-ups, achievements.

---

## Known Issues / Roadmap

-   [ ] Campaign and Choose Opponent modes are in progress.
-   [ ] Accessibility improvements planned.
-   [ ] More Star Trek themed sound effects and animations coming soon!
-   [ ] Advanced features (custom avatars, story mode, etc.) are planned.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Credits

-   **Contributors:** Alex McAlpine, Jake Smith, Jo Wolfarth and Tom Bragg, 

-   Star Trek and related marks are trademarks of CBS Studios Inc.
-   Game logic and UI by:  
    Elite Coders: Alex McAlpine, Jake Smith, Jo Wolfarth, and Tom Bragg
-   [Bootstrap](https://getbootstrap.com/)
-   [Firebase](https://firebase.google.com/)
-   [FontAwesome](https://fontawesome.com/)
-   Star Trek fandom for inspiration

---

## License

This project is licensed under the MIT License.

---


