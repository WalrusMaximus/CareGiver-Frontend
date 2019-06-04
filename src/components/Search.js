import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'


export default class Search extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column>
                        <Segment>
                            Posts
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
