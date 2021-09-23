import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../calculator';

describe('Calculator', () => {
  it('should render the calculator component', () => {
    const calc = renderer.create(<Calculator />);

    expect(calc).toBeTruthy();
  });

  it('displays 7 when 7 button is clicked', () => {
    const calc = render(<Calculator />);
    const sevenButton = calc.getByTestId('seven');
    const screen = calc.getByTestId('screen');
    fireEvent.click(sevenButton);
    expect(screen.textContent).toBe('7');
  });
});
