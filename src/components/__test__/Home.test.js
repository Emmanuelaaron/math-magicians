import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home';

describe('Home', () => {
  it('should render the home component', () => {
    const home = renderer.create(<Home />);

    expect(home).toMatchSnapshot();
  });
});
