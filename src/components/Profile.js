import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import UserCard from './UserCard'
import Posts from './Posts'
import Comments from './Comments'


export default class Profile extends Component {

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
                        <Segment>
                            <Posts
                            posts={this.props.posts}
                            />
                        </Segment>
                        <Segment>
                            <Comments/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
