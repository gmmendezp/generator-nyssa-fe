/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { <%= name %> } from './<%= name %>';

test('inside text matches', () => {
  const component = shallow(<<%= name %> />);
  expect(component.text()).toEqual('<%= name %>');
})
