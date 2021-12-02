import { render, screen } from '@testing-library/react';
import Displayer from './Displayer';

test('renders the Displayer panel', () => {
  const container = render(<Displayer head="kim" pool="indoor" drink="tequila" phrase="howdy" />);
  expect(container).toMatchSnapshot();
});
