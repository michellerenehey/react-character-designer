import './Stats.css';

export default function Stats({ headCount, poolCount, drinkCount, phraseList }) {
  return (
    <div className="stats">
      <p>You have changed characters {headCount} time(s).</p>
      <p>You have changed pools {poolCount} time(s).</p>
      <p>You have changed drinks {drinkCount} time(s).</p>
      <div>
        Your catchphrases are:
        {phraseList.map((elem) => (
          <p key={elem} style={{ color: '#9d8189' }}>
            {elem}
          </p>
        ))}
      </div>
      {/* <img src={cast} /> */}
    </div>
  );
}
