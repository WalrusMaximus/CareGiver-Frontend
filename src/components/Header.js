import React, { Component } from 'react'
import { Dropdown, Menu, Search } from 'semantic-ui-react'

export default class Header extends Component {
    handleInput = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
        
    render() {

        return (
            <Menu>
                <Menu.Item>
                    <p>CareGiver</p>
                </Menu.Item>
                <Menu.Item>
                    <Search size='small' />
                </Menu.Item>
                <Menu.Menu position='right'>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Item>Sign In</Menu.Item>
                        <Menu.Item>Sign Out</Menu.Item>
                </Menu.Menu>

            </Menu>
        )}
    }