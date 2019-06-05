import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'


export default class Signout extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    logout = () => {
        this.props.handleLogOut
        this.setState({ open: false})
        console.log("Working on logout")
    }

    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
        const { open } = this.state
        return (
            <div>
                <Button color="red" onClick={this.show('Signout')}>Signout</Button>
                <Modal open={open} onClose={this.close}>
                <Modal.Header>Logout Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to log out?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={this.close}>No, Stay Logged In</Button>
                    <Button positive onClick={this.logout}>Yes, Logout</Button>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
