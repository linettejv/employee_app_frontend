import Input, { InputPropsTypes } from './input';
import { render, screen } from '@testing-library/react';

describe('testing Input component', () => {
  test('if label of Input renders correctly', () => {
    const onChange = jest.fn();
    const InputProps: InputPropsTypes = {
      label: 'Input - Label',
      value: 'Input - value',
      placeholder: 'Input p',
      type: 'text',
      onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test-on-label');

    expect(element.innerHTML).toBe('Input - Label');

    // fireEvent.click(element);
    // expect(onChange).toBeCalled();
  });

  test('if all props of ?Input works', () => {
    const onChange = jest.fn();
    const InputProps: InputPropsTypes = {
      label: 'Input - Label',
      value: 'Input - value',
      placeholder: 'Input p',
      type: 'text',
      onChange
    };

    render(<Input {...InputProps} />);
    const element1 = screen.getByTestId('input-test');

    expect(element1.getAttribute('value')).toBe('Input - value');
    expect(element1.getAttribute('type')).toBe('text');
    expect(element1.getAttribute('placeholder')).toBe('Input p');

    // fireEvent.click(element1);
    // expect(onChange).toBeCalled();
  });
});
