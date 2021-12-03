import { render, screen } from '@testing-library/react';
import Selector from './Selector';

test('renders the Selector panel', () => {
  const container = render(<Selector head="lisa" pool="outdoor" drink="tequila" phrase="" />);
  expect(container).toMatchSnapshot();
});
