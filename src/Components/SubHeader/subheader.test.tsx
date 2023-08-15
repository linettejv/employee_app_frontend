import { fireEvent, render, screen } from '@testing-library/react';
import SubHeader, { SubHeaderPropsTypes } from './subheader';

describe('Tests for Subheader Component : ', () => {
  test('Have div works', () => {
    const SubHeaderProp: SubHeaderPropsTypes = {
      label: 'Sub Header',
      haveDiv: true
    };

    // fails if useNavigate in the html rendering is not handled
    render(<SubHeader {...SubHeaderProp} />);

    const element = screen.getByTestId('div-test');

    expect(element.getAttribute('class')).toBe('side-blue');
  });
  test('Have button click works', () => {
    const navigator = jest.fn();
    const SubHeaderProp: SubHeaderPropsTypes = {
      label: 'Sub Header',
      haveDiv: true
    };

    // fails if useNavigate in the html rendering is not handled
    render(<SubHeader {...SubHeaderProp} />);

    const element = screen.getByTestId('div-test-button');

    fireEvent.click(element);
    expect(navigator).toBeCalled();
  });
});
