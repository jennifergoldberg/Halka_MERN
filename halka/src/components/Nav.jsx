import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import NavHotlines from './NavHotlines';

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{color:'#101340', borderRadius:"0px", margin:"0px", display:"flex"}}>
        <img src="/assets/Halka.png" alt="logo" style={{height:"15px", margin:"12px"}}/>
        <Link to='/start'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            style={{justifyContent:"space-between"}}
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
            style={{justifyContent:"space-between"}}
          />
        </Link>

        {/* <NavHotlines /> */}
      </Menu>
    )
  }
}