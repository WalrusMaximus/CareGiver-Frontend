import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search } from 'semantic-ui-react'
import Signout from './Signout'
import Signin from './Signin'

var menuStyle = {
    margin: 0,
}

export default class Header extends Component {
        
    render() {

        if (this.props.isLoggedIn) {
            return (
                <Menu style={menuStyle}>
                    <Menu.Item as={Link} name="nurture" to="/">
                        <p>Nurture</p>
                    </Menu.Item>
                    <Menu.Item as={Link} name="Search" to="/search">
                        <Search size='small' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} name="profile" to="/profile">Profile</Menu.Item>
                        <Menu.Item as={Link} name="provider" to="/provider">Provider</Menu.Item>

                        <Menu.Item>
                            <Signout handleSignOut={this.props.handleSignOut}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            )
        } else {
            return (
                <Menu style={menuStyle}>
                    <Menu.Item as={Link} name="nurture" to="/">
                        <p>Nurture</p>
                    </Menu.Item>
                    <Menu.Item as={Link} name="Search" to="/search">
                        <Search size='small' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} name="profile" to="/profile">Profile</Menu.Item>
                        <Menu.Item as={Link} name="provider" to="/provider">Provider</Menu.Item>
                        <Menu.Item>
                            <Signin
                                handleInput={this.props.handleInput}
                                handleSignIn={this.props.handleSignIn}
                                isLoggedIn={this.props.isLoggedIn}
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            )}
        } 
    }