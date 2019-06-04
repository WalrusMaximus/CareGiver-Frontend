import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import UserCard from './UserCard'
import Appointments from './Appointments'
import Schedule from './Schedule'
import Reviews from './Reviews'


export default class Provider extends Component {


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
                            <Appointments/>
                        </Segment>
                        <Segment>
                            <Schedule/>
                        </Segment>
                        <Segment>
                            <Reviews/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
