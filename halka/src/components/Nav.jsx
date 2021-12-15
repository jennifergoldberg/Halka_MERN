import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{color:'#101340', borderRadius:"0px"}}>
        <img src="/assets/Halka.png" alt="logo" style={{height:"15px", margin:"11px"}}/>
        <Link to='/start'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /> 
        </Link>
        {/* <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        /> */}
        <Link to='/'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    )
  }
}