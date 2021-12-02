import { useState } from 'react';

import Selector from '../../components/Selector/Selector';
import Displayer from '../../components/Displayer/Displayer';
// import Stats from '../../components/Stats/Stats';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [pool, setPool] = useState('');
  const [drink, setDrink] = useState('');
  const [phrase, setPhrase] = useState('');

  return (
    <main>
      <Selector {...{ head, setHead, pool, setPool, drink, setDrink, phrase, setPhrase }} />
      <Displayer {...{ head, pool, drink, phrase }} />
      {/* <Stats /> */}
    </main>
  );
}
