import React from 'react';
import { useParams } from 'react-router-dom';
import { mount } from 'enzyme';
import Details from '../Details';

describe("Banner", () => {
  let wrapper;
  wrapper = mount(<Details/>);

  test("Banner Page", () => {
    useParams.mockImplementationOnce(() => ({ url: 'detail' }));
    wrapper.update();
    expect(wrapper.exists()).toBeTruthy();
  });
});