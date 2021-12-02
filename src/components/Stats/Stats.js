import './Stats.css';
import cast from '../../cast.png';

export default function Stats({ headCount, poolCount, drinkCount, phraseList }) {
  return (
    <div className="stats">
      <p>You have changed the character {headCount} time(s).</p>
      <p>You have changed the pool {poolCount} time(s).</p>
      <p>You have changed drinks {drinkCount} time(s).</p>
      <div>
        Your catchphrases are:
        {phraseList.map((elem) => (
          <p key={elem} style={{ color: '#9d8189' }}>
            {elem}
          </p>
        ))}
      </div>
      <img src={cast} />
    </div>
  );
}
