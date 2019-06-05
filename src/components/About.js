import React, { Component } from 'react'
import { Card, Grid } from 'semantic-ui-react'

export default class About extends Component {
    render() {
        return (
            <div>
                <Grid centered>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>About Nurture</Card.Header>
                            <Card.Description>
                                Nurture is an accessible application that allows providers are care with those in need. As a patient you may create an account and review available providers to find the perfect fit for your needs.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid>
            </div>
        )
    }
}
