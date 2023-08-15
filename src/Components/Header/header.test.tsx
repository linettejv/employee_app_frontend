import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Testing the Header Component', () => {
  test('Testing the only Div: ', () => {
    render(<Header />);
    const element = screen.getByTestId('header-test');

    expect(element.getAttribute('class')).toBe('top-bar');
  });
  test('SnapShot test', () => {
    const element = render(<Header />);

    expect(element).toMatchSnapshot();
  });
});
