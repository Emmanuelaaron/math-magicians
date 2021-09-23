import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../calculator';

describe('Calculator', () => {
  it('should render the calculator component', () => {
    const calc = renderer.create(<Calculator />);

    expect(calc).toMatchSnapshot()
  });
});
