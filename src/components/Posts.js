import React, { Component } from 'react'

export default class Posts extends Component {

    componentDidMount() {
        if (this.props.posts)
            this.setState({
                posts: this.props
            })
    }

    render() {
        if (this.props.posts) {
            return (
                <div>
                    <p>Posts:</p>
                    <div>
                        <p>{this.props.posts.details}</p>
                    </div>
                </div>
        )
        } else {
            return (
                <div>
                    <p>No Posts Found</p>
                </div>
            )
        }
    }
}
