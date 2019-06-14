import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class UserCard extends Component {
    render() {
        return (
            <div>
                <Card centered>
                    <Image src='/images/default_avatar.jpg' wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.user.userName}</Card.Header>
                    <Card.Description>
                        {this.props.user.fullName}
                    </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
