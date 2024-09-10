import "../styles/WordDisplay.css";

export default function WordDisplay({
  word,
  guesses,
}: {
  word: string;
  guesses: string[];
}) {
  return (
    <div className="word_display">
      {word.split("").map((letter, index) => (
        <span key={index}>{guesses.includes(letter) ? letter : " _ "}</span>
      ))}
    </div>
  );
}
