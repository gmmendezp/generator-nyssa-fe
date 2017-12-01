/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Home } from './Home';

test('inside text matches', () => {
  const home = shallow(<Home t={ k => k }/>);
  expect(home.find('h2').text()).toEqual('title');
  expect(home.find('p').text()).toEqual('description');
});
