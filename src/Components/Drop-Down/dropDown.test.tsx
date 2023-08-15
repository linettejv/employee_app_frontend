import { fireEvent, render, screen } from '@testing-library/react';
import DropDown, { DropDownProps } from './dropDown';

describe('Tests for Dropdown Component', () => {
  test('Test for outer-div', () => {
    const DropDowntypes: DropDownProps = {
      label: 'Drop-Down',
      options: ['1', '2']
    };

    render(<DropDown {...DropDowntypes} />);
    const element = screen.getByTestId('dropdown-div');

    expect(element.getAttribute('class')).toBe('dropDown');
  });
  test('Test for dropdown label', () => {
    const DropDowntypes: DropDownProps = {
      label: 'Drop-Down',
      options: ['1', '2']
    };

    render(<DropDown {...DropDowntypes} />);
    const element = screen.getByTestId('dropdown-label');

    expect(element.innerHTML).toBe('Drop-Down');
  });
  test('handleSelected is called when select value changes', () => {
    const handleSelected = jest.fn();

    const DropDowntypes: DropDownProps = {
      label: 'Drop-Down',
      options: ['1', '2'],
      handleSelected
    };

    render(<DropDown {...DropDowntypes} />);
    const element = screen.getByTestId('dropdown-select');

    fireEvent.change(element);
    expect(handleSelected).toBeCalled();
  });
  test('options are rendered correctly ', () => {
    const DropDowntypes: DropDownProps = {
      label: 'Drop-Down',
      options: ['1', '2']
    };

    render(<DropDown {...DropDowntypes} />);
    const opts = screen.getAllByTestId('dropdown-option');

    expect(opts.length).toEqual(2);
  });
});
