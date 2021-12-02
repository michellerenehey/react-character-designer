import { useState } from 'react';

import Selector from '../../components/Selector/Selector';
import Displayer from '../../components/Displayer/Displayer';
import Stats from '../../components/Stats/Stats';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [pool, setPool] = useState('');
  const [drink, setDrink] = useState('');
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [poolCount, setPoolCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);

  return (
    <main>
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
      <Stats {...{ headCount, poolCount, drinkCount }} />
    </main>
  );
}
