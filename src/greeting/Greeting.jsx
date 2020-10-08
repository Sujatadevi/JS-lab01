import React, { Component } from 'react'
export default class Greeting extends Component {
    render() {
        return (
            <div className='card'>
                <div className='col-lg-12'>
                    <h5>Heya ! <span className='name'>{this.props.name ? this.props.name : '___'}</span> here. Haven't talked to you in a while. Thought I'd say hello!</h5>
                </div>
            </div>
        )
    }
}
