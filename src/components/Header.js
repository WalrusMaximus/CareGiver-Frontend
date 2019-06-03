import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search } from 'semantic-ui-react'
import Signout from './Signout'
import Signin from './Signin'

var menuStyle = {
    margin: 0,
}

export default class Header extends Component {


    handleInput = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
        
    render() {

        return (
            <Menu style={menuStyle}>
                <Menu.Item as={Link} name="caregiver" to="/">
                    <p>CareGiver</p>
                </Menu.Item>
                <Menu.Item>
                    <Search size='small' />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} name="profile" to="/profile">Profile</Menu.Item>
                    <Menu.Item><Signin/></Menu.Item>
                    <Menu.Item><Signout/></Menu.Item>
                </Menu.Menu>

            </Menu>
        )}
    }