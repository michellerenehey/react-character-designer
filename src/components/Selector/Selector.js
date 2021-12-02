import './Selector.css';

export default function Selector({ head, setHead, pool, setPool, drink, setDrink }) {
  return (
    <>
      <div>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="kim">kim richards</option>
          <option value="kyle">kyle richards</option>
          <option value="lisa">lisa vanderpump</option>
        </select>
        <label>Head</label>
      </div>
      <div>
        <select value={pool} onChange={(e) => setPool(e.target.value)}>
          <option value="indoor">indoor pool</option>
          <option value="outdoor">outdoor pool</option>
          <option value="rooftop">rooftop pool</option>
        </select>
      </div>
      <div>
        <select value={drink} onChange={(e) => setDrink(e.target.value)}>
          <option value="wine">white wine</option>
          <option value="tequila">tequila shot</option>
          <option value="champ">champers</option>
        </select>
      </div>
    </>
  );
}
