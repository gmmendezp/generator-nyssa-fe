import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StyleRoot, Style } from 'radium'

import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const styles = {
  'html, body': {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0
  },
  html: {
    boxSizing: 'border-box'
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit'
  },
  '#root': {
    width: '100%',
    height: '100%'
  }
}

ReactDOM.render(
  <StyleRoot>
    <Style rules={styles} />
    <Provider store={configureStore()}>
      <Router />
    </Provider>
  </StyleRoot>,
  document.getElementById('root')
)

registerServiceWorker()
