import './Displayer.css';

export default function Displayer({ head, pool, drink, phrase }) {
  return (
    <>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${head}.jpeg`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${pool}.jpeg`} />
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${drink}.jpeg`} />
      </div>
      <div>
        <p style={{ color: 'green', fontSize: '100px' }}>{phrase}</p>
      </div>
    </>
  );
}
