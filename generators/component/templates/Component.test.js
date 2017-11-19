/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { <%= name %> } from './<%= name %>';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<<%= name %> />, div);
})

test('inside text matches', () => {
  const component = shallow(<<%= name %> />);
  expect(component.text()).toEqual('<%= name %>');
})
