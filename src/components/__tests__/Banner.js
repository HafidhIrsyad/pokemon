import React from 'react';
import { mount } from 'enzyme';
import Banner from '../Banner';

describe("Banner", () => {
  let wrapper;
  wrapper = mount(<Banner/>);

  test("Banner Page", () => {
    wrapper.update();
    expect(wrapper.exists()).toBeTruthy();
  });
});