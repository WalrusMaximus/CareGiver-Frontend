import React, { Component } from 'react'
import { Grid, Segment, Card, Image } from 'semantic-ui-react'


export default class Profile extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={6}>
                    <Segment>
                        <Card>
                            <Image src='/images/default_avatar.jpg' wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>Test</Card.Header>
                            <Card.Meta>
                                <span>Stuff</span>
                            </Card.Meta>
                            <Card.Description>
                                About
                            </Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={10}>
                    <Segment>Search</Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
