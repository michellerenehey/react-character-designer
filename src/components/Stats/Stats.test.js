import { render, screen } from '@testing-library/react';
import Stats from './Stats';

test('renders the Stats panel', () => {
  const container = render(<Stats headCount="0" poolCount="0" drinkCount="0" phraseList={[]} />);
  expect(container).toMatchSnapshot();
});
