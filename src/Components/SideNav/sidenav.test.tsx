import { render } from '@testing-library/react';
import SideNav from './sidenav';

describe('Testing SideNav', () => {
  test('Checking snapShots:', () => {
    const element = render(<SideNav />);

    expect(element).toMatchSnapshot();
  });
});
