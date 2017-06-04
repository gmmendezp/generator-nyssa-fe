/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Home from './Home'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})

test('inside text matches', () => {
  const home = shallow(<Home />)
  expect(home.find('p').text()).toEqual('Just a home page')
})
