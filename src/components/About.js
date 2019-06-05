import React, { Component } from 'react'
import { Container, Card } from 'semantic-ui-react'

let aboutStyle = {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "0",
    right: "0"
}
export default class About extends Component {
    


    render() {
        return (
            <div>
                <Container style={aboutStyle}>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>About Nurture</Card.Header>
                            <Card.Description>
                                Nurture is an accessible application that allows providers are care with those in need. As a patient you may create an account and review available providers to find the perfect fit for your needs.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Container>
            </div>
        )
    }
}
