import Button, { ButtonPropsTypes } from './button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('testing Button component', () => {
  test('if label renders correctly', () => {
    const ButtonProps: ButtonPropsTypes = {
      text: 'Button',
      type: 'enabled'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.innerHTML).toBe('Button');
  });

  test('if On click of button works', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropsTypes = {
      text: 'Button',
      type: 'enabled',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });

  test('if snapshot rendered', () => {
    const ButtonProps: ButtonPropsTypes = {
      text: 'Button',
      type: 'enabled'
    };

    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
