import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../Quote';

describe('Quote', () => {
  it('should render the quote component', () => {
    const quote = renderer.create(<Quote />);

    expect(quote).toMatchSnapshot()
  });
});