import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe("Footer", () => {
  let wrapper;
  wrapper = mount(<Footer/>);

  test("Footer Page", () => {
    wrapper.update();
    expect(wrapper.exists()).toBeTruthy();
  });
});