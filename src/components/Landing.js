import React, { Component } from 'react'
// import { Grid, Card, Segment } from 'semantic-ui-react'
import About from './About'


export default class Landing extends Component {
    render() {
        return (
            <div>
                <About/>
                {/* <Segment>
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
                </Segment> */}
            </div>
        )
    }
}
