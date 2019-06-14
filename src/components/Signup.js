import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'


export default class Signin extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
  
    render() {
        const { open } = this.state
        return (
            <div>
                <Button type="button" color="blue" onClick={this.show('Signin')}>Sign Up</Button>
                <Modal open={open} onClose={this.close}>
                <Modal.Header>Create Account</Modal.Header>
                <Modal.Content>
                    <p>Enter your account information below</p>
                </Modal.Content>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Name</label>
                            <input name="fullName" placeholder='Full Name' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input name="email" placeholder='Email' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Form.Field>
                            <label>User Type</label>
                            <input name="userType" placeholder='Consumer or Provider' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" name='password' placeholder='Password' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Button type='button' onClick={this.props.handleSignUp}>Sign Up</Button>
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
