import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
                <Card centered>
                    <Image src='/images/default_avatar.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>Test</Card.Header>
                    <Card.Description>
                        About
                    </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
