import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'


export default class Signout extends Component {

    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
        const { open, size } = this.state
        return (
            <div>
                <Button color="red" onClick={this.show('Signout')}>Signout</Button>
                <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>Logout Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to log out?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No, Stay Logged In</Button>
                    <Button positive>Yes, Logout</Button>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
