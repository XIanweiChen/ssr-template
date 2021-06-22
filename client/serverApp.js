import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createStateMap } from './store/store'
// import AppState from './store/app-state';
import App from './views/App'


export default (routerContext, url) => (
  <Provider appState={1}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)

export { createStateMap }
