import React, { Component }  from 'react'
import logo from '../../img/logo.svg';
import { Menu, Input, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'
import defaults from '../../theme/variables'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Auth } from '../auth/actions'

import styled from 'styled-components'

const StyledHeader = styled.div`
  --bg: ${lighten(0.6, defaults.fg)};
  background: var(--bg);
  
  .logo, .ui.menu {
    background: #fff;
  }
  
  .ui.secondary.menu .item {
    
    &.active {
      color: var(--activeLink);
      border-color: var(--activeLink);
    }
  }
  
  
  .logo img {
    height: 50px;
    margin: 20px;
  }
  
  .ui.secondary.menu a.item.create-event-btn {
    border: 1px solid var(--activeLink);
    border-radius: 5px;
    background: var(--activeLink);
    color: var(--bg);
    letter-spacing: 1.2px;
    padding: 8px 15px 6px;
    margin: 5px;
  }
`

class Header extends Component {
  state = { activeItem: 'Events' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // handleLogout = async (e) => {
  //   let res = await this.props.logout()
  //   if (res) this.props.history.push('/login')
  // }

  handleLogout = (e) => {
    this.props.logout()
      .then(res => this.props.history.push('/login'))
  }

  render() {
    const menu = ['Events', 'Organizations', 'Explore']
    const { activeItem } = this.state
    return (
      <StyledHeader className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} className="img-logo" />
          </a>
        </div>
        <Menu pointing secondary>
          {menu.map(item =>
            <Menu.Item name={item}
                       active={activeItem === item}
                       onClick={this.handleItemClick} />
          )}
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>

            <Menu.Item link>
              <Link to="/events/new" className="ui primary button">
                <Icon name="plus"/>
                Create Event
              </Link>
            </Menu.Item>

            <Menu.Item name='logout'
                       active={activeItem === 'logout'}
                       onClick={this.handleLogout} />
          </Menu.Menu>
        </Menu>
      </StyledHeader>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    logout: Auth.logout
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))