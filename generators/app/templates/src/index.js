import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { normalize, setupPage } from 'csstips'
import { cssRule } from 'typestyle'

import { CSS } from './utils/constants'
import Router from './router'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

normalize()
setupPage('#root')

cssRule('body', {
  fontFamily: CSS.FONT_PRIMARY,
  backgroundColor: CSS.BG_COLOR_PRIMARY
})

function renderApp () {
  let store = configureStore()
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  )

  registerServiceWorker(store)
}

if (!global.Intl) {
  console.log(1)
  const locale =
    window.navigator.userLanguage || window.navigator.language || 'en-US'
  Promise.all([
    require('intl'),
    require(`intl/locale-data/jsonp/${locale}`)
  ]).then(() => renderApp())
} else {
  renderApp()
}
