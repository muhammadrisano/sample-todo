import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button type={this.props.type}>{this.props.title}</button>
        )
    }
}

export default Button
