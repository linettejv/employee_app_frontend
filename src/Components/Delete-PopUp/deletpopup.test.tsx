import { fireEvent, render, screen } from '@testing-library/react';
import DeletePopup from './deletepopup';

jest.mock('../../Pages/Employee/api', () => ({
  useDeleteEmployeeMutation: jest.fn(() => [jest.fn()])
}));

describe('Testing DeletePopup', () => {
  test('Checking snapShots for deltePopup:', () => {
    const element = render(<DeletePopup />);

    expect(element).toMatchSnapshot();
  });
  test('testing handle delete clicks ', () => {
    const mockfn = jest.fn();


    render(<DeletePopup />);

    const element = screen.getByTestId('popup-button-test');

    fireEvent.click(element);

  });
});
