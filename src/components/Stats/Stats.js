import './Stats.js';

export default function Stats({ headCount, poolCount, drinkCount, phraseList }) {
  return (
    <div>
      <p>You have changed the character {headCount} time(s).</p>
      <p>You have changed the pool {poolCount} time(s).</p>
      <p>You have changed drinks {drinkCount} time(s).</p>
      <div>
        Your catchphrases are:
        {phraseList.map((elem) => (
          <p key={elem}>{elem}</p>
        ))}
      </div>
    </div>
  );
}
