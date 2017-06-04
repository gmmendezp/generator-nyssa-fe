import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { normalize, setupPage } from 'csstips'

import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

normalize()
setupPage('#root')

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
