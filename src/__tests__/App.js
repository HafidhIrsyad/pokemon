import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { ApolloProvider } from '@apollo/client';


describe("Banner", () => {
  const client = jest.fn();
  let wrapper;
  wrapper = mount(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  );

  test("Banner Page", () => {
    wrapper.update();
    expect(wrapper.exists()).toBeTruthy();
  });
});
