import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import UserCard from './UserCard'
import Posts from './Posts'
import Schedule from './Schedule'


export default class Profile extends Component {


    render() {
        return (
            <div>
                <Grid centered columns={2}>
                    <Grid.Column centered width={4}>
                    <Segment>
                        <UserCard/>
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment>
                            <Posts/>
                        </Segment>
                        <Segment>
                            <Schedule/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
