import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'


export default class Signin extends Component {
    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
        const { open, size } = this.state
        return (
            <div>
                <Button color="blue" onClick={this.show('Signin')}>Signin</Button>
                <Modal size={size} open={open} onClose={this.close}>
                <Modal.Header>Signin Account</Modal.Header>
                <Modal.Content>
                    <p>Enter your account information below</p>
                </Modal.Content>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Content>
                <Modal.Content>
                    <p>Don't have an account? - <a href="#">Register</a></p>
                </Modal.Content>
                </Modal>
            </div>
        )
    }
}
