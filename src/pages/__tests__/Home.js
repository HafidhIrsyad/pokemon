import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/client';
import Home from '../Home';

describe("Home", () => {
  let wrapper;
  const client = jest.fn()
  wrapper = mount(
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );

  test("Home Page", () => {
    wrapper.update();
    expect(wrapper.exists()).toBeTruthy();
  });
});