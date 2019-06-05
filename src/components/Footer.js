import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'


let footerStyle = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
}

export default class Header extends Component {


    render() {
        return (
            <Container textAlign="center" style={footerStyle}>
                <Segment>Made by Walrus and JonR</Segment>
            </Container>
          )
        
    }
}