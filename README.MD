# Challenge of the Vulcan Mind

A Star Trek–themed Rock-Paper-Scissors-Lizard-Spock game with multiple play modes, real-time leaderboard, and a modern, responsive UI. Built with HTML, CSS (Bootstrap), and JavaScript.

---

## 🖼️ Website Mockup

![Website Mockup](/readme-documentation/mock-up.png)

---

## 🌐 Deployed Site

[https://tbragg88.github.io/Rock-Paper-Scissor-Group/](https://tbragg88.github.io/Rock-Paper-Scissor-Group/)

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
<img src="readme-documentation/wireframes/Home-page.png" alt="Home Wireframe" width="160" />
<img src="readme-documentation/wireframes/Phone.png" alt="Mobile Wireframe" width="160" />
<img src="readme-documentation/wireframes/Play-page.png" alt="Play Wireframe" width="160" />

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

## 🚀 How AI Was Used

Artificial Intelligence played a crucial role in shaping this project, streamlining development, and improving overall efficiency. Here’s how AI was leveraged:

1. **Code Generation:**  
   AI-powered tools, such as **GitHub Copilot**, provided structured HTML and CSS code snippets, streamlining development. "A manual review ensured code quality. In the end, I mainly used an external Copilot for 'How can I do X?' rather than letting VS Code's internal Copilot indiscriminately shotgun lines."
2. **Debugging & Optimization:**  
   AI debugging tools detected errors and suggested solutions, minimizing bugs and improving stability.
   "The W3C Markup Validation Service was great for identifying issues and bad coding practices. Lighthouse was particularly helpful in assessing accessibility and ensuring sufficient text contrast for an inclusive experience."

3. **AI-Generated Imagery:**  
   **DALL-E** was used to generate all images for the website, ensuring consistency and creativity.
   "This was great from start to finish. As someone with little artistic talent, it provided me with enough guidance to create an aesthetic that flowed nicely."

4. **Content Assistance:**  
   **GitHub Copilot** aided in text refinement, delivering real-time suggestions for blurbs and content. "Again, this is completely true—I wrote nothing on the page. Every paragraph, inspirational message, and aspiration came entirely from the AI, and it was both cohesive and comprehensive."

5. **Accessibility Improvements:**  
   Tools like **Lighthouse** assessed accessibility features and provided recommendations for a user-friendly experience. "Not only was Lighthouse useful, but the built-in Copilot was also effective at formatting and validation. It highlighted best practices for aria-label placement and suggested accessibility improvements. It was very good at that."

    ***

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


## 🌓 Partial Integrations

-   **Dark/Light Mode Toggle Animation:**  
    More elaborate transitions were tested but replaced with a subtle, accessible toggle for a smoother experience.

These decisions were made to ensure the site remains approachable, fast, and easy to navigate for all users.

---
## 🛠️ Features Considered But Not Included

During development, several features were explored but not included to maintain clarity, accessibility, and a calming user experience:

-   **Image Carousel:**  
    Initially planned for the hero or resource sections to showcase tips and affirmations. Removed as it disrupted the calm, focused flow of the site and could distract users seeking support.

-   **Breathing Animation:**  
    A guided breathing exercise animation was prototyped to help users manage stress. It was omitted to keep the interface simple and avoid overwhelming first-time visitors. This feature may be revisited in future updates.

-   **Live Chat Widget:**  
    Considered for instant support, but excluded to maintain privacy and reduce technical complexity for a static site.

---