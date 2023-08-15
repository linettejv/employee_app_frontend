import { render, screen } from '@testing-library/react';
import DetailsCard, { DetailsCardPropsTypes } from './detailsCard';

describe('Testing Details Card Component--', () => {
  test('Testing the outer Div', () => {
    const DCprops: DetailsCardPropsTypes = {
      label: 'Details-Card-label',
      data: 'Details-Card-data'
    };

    render(<DetailsCard {...DCprops} />);
    const element = screen.getByTestId('DC-div');

    expect(element.getAttribute('class')).toBe('card');
  });
  test('Testing the Label', () => {
    const DCprops: DetailsCardPropsTypes = {
      label: 'Details-Card-label',
      data: 'Details-Card-data'
    };

    render(<DetailsCard {...DCprops} />);
    const element = screen.getByTestId('DC-label');

    expect(element.getAttribute('class')).toBe('label');
    expect(element.innerHTML).toBe('Details-Card-label');
  });
  test('Testing the Data inside', () => {
    const DCprops: DetailsCardPropsTypes = {
      label: 'Details-Card-label',
      data: 'Details-Card-data'
    };

    render(<DetailsCard {...DCprops} />);
    const element = screen.getByTestId('DC-data');

    expect(element.getAttribute('class')).toBe('data');
    expect(element.innerHTML).toBe('Details-Card-data');
  });
});
