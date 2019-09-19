import React from 'react'
import { StaticRouter } from 'react-router-dom'
// import { Provider } from 'mobx-react'
import { createStateMap } from './store/store'
import App from './views/App'


export default (routerContexxt, url) => (
  <StaticRouter context={routerContexxt} location={url}>
    <App />
  </StaticRouter>
)

export { createStateMap }
