import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from '../../auth/actions'

class MainContentContainer extends Component {
  getProps = () => ({ user: Auth.currentUser() })

  render () {
    return this.props.children(this.getProps())
  }
}

export default MainContentContainer
