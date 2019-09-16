import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Mainpage from '../views/Mainpage/index'
import About from '../views/About/index'

export default function () {
  return (
    <>
      <Route path="/" render={() => <Redirect to="/main" />} exact />
      <Route path="/about" component={About} />
      <Route path="/main" component={Mainpage} />
    </>
  )
}
