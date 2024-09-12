import { words, messages } from "./constants";

export function getRandomWord(): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function resetGame() {
  const word = getRandomWord();
  const currentStatus = messages.inProgress;
  const guesses: string[] = [];
  const incorrectGuesses = 0;

  return { word, currentStatus, guesses, incorrectGuesses };
}

export function handleKeyboardInput(
  key: string,
  guesses: string[],
  word: string,
  incorrectGuesses: number
): { guesses: string[]; currentStatus: string; incorrectGuesses: number } {
  if (guesses.includes(key.toLowerCase())) {
    return {
      guesses,
      currentStatus: getCurrentStatus(guesses, word, incorrectGuesses),
      incorrectGuesses,
    };
  }

  const updatedGuesses = [...guesses, key.toLowerCase()];

  if (!word.includes(key.toLowerCase())) {
    return {
      guesses: updatedGuesses,
      currentStatus: getCurrentStatus(
        updatedGuesses,
        word,
        incorrectGuesses + 1
      ),
      incorrectGuesses: incorrectGuesses + 1,
    };
  }

  return {
    guesses: updatedGuesses,
    currentStatus: getCurrentStatus(updatedGuesses, word, incorrectGuesses),
    incorrectGuesses,
  };
}

function getCurrentStatus(
  guesses: string[],
  word: string,
  incorrectGuesses: number
): string {
  const revealedLetters = word
    .split("")
    .map((letter) => (guesses.includes(letter.toLowerCase()) ? letter : "_"))
    .join("");

  if (revealedLetters === word) {
    return messages.win;
  } else if (incorrectGuesses >= 6) {
    return messages.lose;
  } else {
    return messages.inProgress;
  }
}
