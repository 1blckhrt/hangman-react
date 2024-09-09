import { applicationName, messages } from "../utils/constants";
import GameStatus from "../components/GameStatus";

export default function Home() {
  let currentStatus = messages.inProgress; // only for testing purposes

  return (
    <div>
      <h1>{applicationName}</h1>
      <GameStatus status={currentStatus} />
    </div>
  );
}
