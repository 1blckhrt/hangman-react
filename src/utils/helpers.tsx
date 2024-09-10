import { words, messages } from "./constants";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function resetGame() {
  let word = getRandomWord();
  let currentStatus = messages.inProgress;
  let guesses: string[] = [];

  return { word, currentStatus, guesses };
}

export function handleKeyboardInput(
  key: string,
  guesses: string[],
  word: string
): { guesses: string[]; currentStatus: string } {
  const updatedGuesses = [...guesses, key.toLowerCase()];
  const currentStatus = getCurrentStatus(updatedGuesses, word);

  return { guesses: updatedGuesses, currentStatus };
}

function getCurrentStatus(guesses: string[], word: string): string {
  const revealedLetters = word
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join("");

  if (revealedLetters === word) {
    return messages.win;
  } else if (guesses.length >= 6) {
    return messages.lose;
  } else {
    return messages.inProgress;
  }
}
