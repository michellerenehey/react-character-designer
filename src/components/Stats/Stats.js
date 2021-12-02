import './Stats.js';

export default function Stats({ headCount, poolCount, drinkCount }) {
  return (
    <div>
      <p>You have changed the character {headCount} times.</p>
      <p>You have changed the pool {poolCount} times.</p>
      <p>You have changed drinks {drinkCount} </p>
    </div>
  );
}
