import Selector from '../../components/Selector/Selector';
import Displayer from '../../components/Displayer/Displayer';
import Stats from '../../components/Stats/Stats';

import './Home.css';

export default function Home() {
  return (
    <main>
      <Selector />
      <Displayer />
      <Stats />
    </main>
  );
}
