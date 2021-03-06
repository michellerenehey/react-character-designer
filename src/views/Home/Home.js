import { useState } from 'react';

import Selector from '../../components/Selector/Selector';
import Displayer from '../../components/Displayer/Displayer';
import Stats from '../../components/Stats/Stats';
import background from '../../pattern.png';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('lisa');
  const [pool, setPool] = useState('outdoor');
  const [drink, setDrink] = useState('tequila');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [poolCount, setPoolCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <Selector
        {...{
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
          setHeadCount,
          setPoolCount,
          setDrinkCount,
        }}
      />
      <Displayer {...{ head, pool, drink, phrase }} />
      <Stats {...{ headCount, poolCount, drinkCount, phraseList }} />
    </main>
  );
}
