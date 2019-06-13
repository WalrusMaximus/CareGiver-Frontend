import React, { Component } from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'


export default class Signin extends Component {

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    state = { open: false }
  
    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    login = () => {
        this.props.handleLogIn
        this.setState({ open: false})
        console.log(this.props.isLoggedIn, "prop login")
        console.log(this.state.isLoggedIn, "state login")
    }
  
    render() {
        const { open } = this.state
        return (
            <div>
                <Button type="button" color="blue" onClick={this.show('Signin')}>Signin</Button>
                <Modal open={open} onClose={this.close}>
                <Modal.Header>Signin Account</Modal.Header>
                <Modal.Content>
                    <p>Enter your account information below</p>
                </Modal.Content>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Email</label>
                            <input name="userEmail" placeholder='Email' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input type="password" name='userPassword' placeholder='Password' onChange={this.props.handleInput} />
                        </Form.Field>
                        <Button type='button' onClick={this.login}>Sign In</Button>
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
