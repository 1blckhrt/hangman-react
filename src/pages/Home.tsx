import { applicationName, messages } from "../utils/constants";
import GameStatus from "../components/GameStatus";
import Keyboard from "../components/Keyboard";
import HangmanFigure from "../components/HangmanFigure";

export default function Home() {
  let currentStatus = messages.inProgress; // only for testing purposes

  return (
    <div>
      <HangmanFigure />
      <h1>{applicationName}</h1>
      <GameStatus status={currentStatus} />
      <Keyboard />
    </div>
  );
}
