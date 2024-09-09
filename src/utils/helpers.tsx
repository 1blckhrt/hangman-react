import { words } from "./constants";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function reloadPage() {
  window.location.reload();
}
