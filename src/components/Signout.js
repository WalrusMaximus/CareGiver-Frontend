import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'


export default class Signout extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    signout = () => {
        this.props.handleSignOut
        this.setState({ open: false})
        console.sign("Working on signout")
    }

    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
        const { open } = this.state
        return (
            <div>
                <Button type="button" color="red" onClick={this.show('Signout')}>Signout</Button>
                <Modal open={open} onClose={this.close}>
                <Modal.Header>Signout Account</Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to sign out?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={this.close}>No, Stay Signed In</Button>
                    <Button positive onClick={this.signout}>Yes, Signout</Button>
                </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
