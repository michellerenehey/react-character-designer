import './Selector.css';

export default function Selector({
  head,
  setHead,
  pool,
  setPool,
  drink,
  setDrink,
  phrase,
  setPhrase,
  setPhraseList,
  setHeadCount,
  setPoolCount,
  setDrinkCount,
}) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };

  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handlePool = (e) => {
    setPool(e.target.value);
    setPoolCount((prevState) => prevState + 1);
  };

  const handleDrink = (e) => {
    setDrink(e.target.value);
    setDrinkCount((prevState) => prevState + 1);
  };

  return (
    <div className="selector">
      <div className="choices">
        <label>Pick your housewife:</label>
        <select value={head} onChange={handleHead}>
          <option value="kim">kim richards</option>
          <option value="kyle">kyle richards</option>
          <option value="lisa">lisa vanderpump</option>
        </select>
      </div>
      <div className="choices">
        <label>Pick her pool:</label>
        <select value={pool} onChange={handlePool}>
          <option value="indoor">indoor pool</option>
          <option value="outdoor">outdoor pool</option>
          <option value="rooftop">rooftop pool</option>
        </select>
      </div>
      <div className="choices">
        <label>Pick her drink of choice:</label>
        <select value={drink} onChange={handleDrink}>
          <option value="wine">white wine</option>
          <option value="tequila">tequila shot</option>
          <option value="champ">champers</option>
        </select>
      </div>
      <div className="choices">
        <label>Her catch phrase?</label>
        <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <button onClick={handleClick}>save the phrase</button>
      </div>
    </div>
  );
}
