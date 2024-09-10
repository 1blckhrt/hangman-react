import { alphabet } from "../utils/constants";
import "../styles/Keyboard.css";

export default function Keyboard() {
  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button key={letter} className="keyboard_key">
          {letter}
        </button>
      ))}
    </div>
  );
}
