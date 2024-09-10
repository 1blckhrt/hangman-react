import { applicationName, messages, alphabet } from "../utils/constants";
import { resetGame, handleKeyboardInput } from "../utils/helpers";
import GameStatus from "../components/GameStatus";
import WordDisplay from "../components/WordDisplay";
import "../styles/Home.css";

export default function Home() {
  const { word, currentStatus, guesses } = resetGame();

  return (
    <div className="container">
      <div className="graphic_container">
        <WordDisplay word={word} guesses={[]} />
      </div>
      <div className="game_container">
        <h1>{applicationName}</h1>
        <GameStatus status={currentStatus} />
        <div className="keyboard">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleKeyboardInput(letter, guesses, word)}
              className="keyboard_key"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
