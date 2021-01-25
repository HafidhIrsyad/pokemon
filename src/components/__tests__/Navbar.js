import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Navbar from '../Navbar';

describe('src/components/Navbar', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Navbar />);
    expect(tree).toMatchSnapshot();
  });
});
