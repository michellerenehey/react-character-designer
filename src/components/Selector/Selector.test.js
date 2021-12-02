import { render, screen } from '@testing-library/react';
import Selector from './Selector';

test('renders the Selector panel', () => {
  const container = render(<Selector head="kim" pool="indoor" drink="wine" phrase="hello" />);
  expect(container).toMatchSnapshot();
});
