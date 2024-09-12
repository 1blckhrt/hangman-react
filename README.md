# Hangman Game

Welcome to the Hangman Game! This is a classic word-guessing game implemented in React, where players guess letters to figure out a hidden word before running out of chances.

## Features

- **Dynamic Gameplay:** Random words are chosen for each game, making every playthrough unique.
- **Interactive UI:** Clickable letters on a virtual keyboard, with incorrect letters disappearing from the keyboard.
- **Visual Feedback:** A hangman figure progressively builds as incorrect guesses accumulate.
- **Status Updates:** Displays current game status, whether in progress, won, or lost.

## Getting Started

To get started with the Hangman Game, follow these instructions:

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/1blckhrt/hangman-react
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd hangman-react
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **Enjoy the Game!**

- Your Hangman Game should now be running at `http://localhost:5173`!

## How to Play

- Guess a Letter: Click on a letter in the virtual keyboard to guess.
- View Progress: The game will reveal correct guesses and display the current status of the hidden word.
- Track Incorrect Guesses: The hangman figure will progressively build with each incorrect guess. You have a limited number of incorrect guesses before the game is lost.

## Components

- **Game Status**: Displays the current status of the game (In Progress, Won, or Lost).
- **Hangman Figure**: Displays each part of the hangman figure.
- **Word Display**: Displays the word letter blanks.

## Customization

You can customize the game by modifying the following files:

- `src/utils/constants.ts`: Update the list of words or game messages.
- `src/utils/helpers.ts` and `src/pages/Home.tsx`: Adjust game logic or add new features.
- `src/styles/Home.css`: Change the styling of the game interface and keyboard.

## Contributing

- Contributions are welcome! Please fork the repository and submit a pull request with your improvements or bug fixes.

## License

- This project is licensed under the MIT License. See the `LICENSE` file for details.
