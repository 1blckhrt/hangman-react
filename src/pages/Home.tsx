import { useState } from "react";
import { applicationName, alphabet, messages } from "../utils/constants";
import { resetGame, handleKeyboardInput } from "../utils/helpers";
import GameStatus from "../components/GameStatus";
import WordDisplay from "../components/WordDisplay";
import "../styles/Home.css";
import {
  Arm1,
  Arm2,
  Body,
  Head,
  Leg1,
  Leg2,
  Rod,
} from "../components/HangmanFigure";

export default function Home() {
  const [gameState, setGameState] = useState(resetGame());

  const { word, currentStatus, incorrectGuesses, guesses } = gameState;

  const handleClick = (key: string) => {
    const {
      guesses: updatedGuesses,
      currentStatus: newStatus,
      incorrectGuesses: newIncorrectGuesses,
    } = handleKeyboardInput(key, guesses, word, incorrectGuesses);
    setGameState({
      ...gameState,
      guesses: updatedGuesses,
      currentStatus: newStatus,
      incorrectGuesses: newIncorrectGuesses,
    });
  };

  return (
    <div className="container">
      <div className="graphic_container">
        <svg width="200" height="250">
          <Rod />
          {incorrectGuesses >= 1 && <Head />}
          {incorrectGuesses >= 2 && <Body />}
          {incorrectGuesses >= 3 && <Arm1 />}
          {incorrectGuesses >= 4 && <Arm2 />}
          {incorrectGuesses >= 5 && <Leg1 />}
          {incorrectGuesses >= 6 && <Leg2 />}
        </svg>
        <WordDisplay word={word} guesses={guesses} />
      </div>
      <div className="game_container">
        <h1>{applicationName}</h1>
        <GameStatus status={currentStatus} />
        <div className="keyboard">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleClick(letter)}
              disabled={
                guesses.includes(letter) ||
                currentStatus !== messages.inProgress
              }
              className={"keyboard_key"}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
