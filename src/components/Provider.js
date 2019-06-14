import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import UserCard from './UserCard'
import Appointments from './Appointments'
import Comments from './Comments'
import Reviews from './Reviews'


export default class Provider extends Component {


    render() {
        return (
            <div>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                    <Segment>
                        <UserCard
                        user={this.props.user}
                        />
                    </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* <Segment>
                            <Appointments/>
                        </Segment> */}
                        <Segment>
                            <Comments/>
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
