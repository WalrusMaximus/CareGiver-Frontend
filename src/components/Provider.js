import React, { Component } from 'react'
import { Grid, Segment, Card, Image } from 'semantic-ui-react'


export default class Provider extends Component {


    render() {
        return (
            <div>
                <Grid centered columns={2}>
                    <Grid.Column centered width={4}>
                    <Segment>
                        <Card centered>
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
                    <Grid.Column width={12}>
                        <Segment>
                            Appointments
                        </Segment>
                        <Segment>
                            Schedule
                        </Segment>
                        <Segment>
                            Messages
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
