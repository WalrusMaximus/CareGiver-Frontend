import React, { Component } from 'react'
import { Grid, Card, Segment } from 'semantic-ui-react'


export default class Landing extends Component {
    render() {
        return (
            <div>
                <img src="/images/landing.jpeg" class="ui fluid image" alt="provider and patient in a field" />
                <Segment>
                    <Grid centered>
                        <Grid.Row centered columns={3}>
                            <Grid.Column>
                                <Card centered>
                                    <p>News</p>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card centered>
                                    <p>News</p>
                                </Card>
                            </Grid.Column>
                            <Grid.Column>
                                <Card centered>
                                    <p>News</p>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
