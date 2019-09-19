import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import Appstate from '../../store/app-state'

@inject('appState') @observer
class About extends React.Component {
  render() {
    return <h2>{this.props.appState.msg}</h2>
  }
}


About.propTypes = {
  appState: PropTypes.instanceOf(Appstate),
}

export default About
