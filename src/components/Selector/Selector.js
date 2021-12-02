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
  phraseList,
  setPhraseList,
}) {
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, phrase]);
    setPhrase('');
  };
  return (
    <>
      <div>
        <label>Pick your housewife</label>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="kim">kim richards</option>
          <option value="kyle">kyle richards</option>
          <option value="lisa">lisa vanderpump</option>
        </select>
      </div>
      <div>
        <label>Pick her pool</label>
        <select value={pool} onChange={(e) => setPool(e.target.value)}>
          <option value="indoor">indoor pool</option>
          <option value="outdoor">outdoor pool</option>
          <option value="rooftop">rooftop pool</option>
        </select>
      </div>
      <div>
        <label>Pick her drink of choice</label>
        <select value={drink} onChange={(e) => setDrink(e.target.value)}>
          <option value="wine">white wine</option>
          <option value="tequila">tequila shot</option>
          <option value="champ">champers</option>
        </select>
      </div>
      <div>
        <label>Her catch phrase?</label>
        <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
        <button onClick={handleClick}>save the phrase</button>
      </div>
    </>
  );
}
