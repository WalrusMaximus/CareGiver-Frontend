import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'


let footerStyle = {
    position: "sticky",
    bottom: 0,
    left: "0%",
    right: "0%"
}

export default class Header extends Component {


    render() {
        return (
            <Container textAlign="center" style={footerStyle}>
                <Segment>Pellentesque habitant morbi tristique senectus.</Segment>
            </Container>
          )
        
    }
}