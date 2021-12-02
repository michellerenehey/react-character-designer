import { useState } from 'react';

import Selector from '../../components/Selector/Selector';
import Displayer from '../../components/Displayer/Displayer';
// import Stats from '../../components/Stats/Stats';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [pool, setPool] = useState('');
  const [drink, setDrink] = useState('');

  return (
    <main>
      <Selector {...{ head, setHead, pool, setPool, drink, setDrink }} />
      <Displayer {...{ head, pool, drink }} />
      {/* <Stats /> */}
    </main>
  );
}
