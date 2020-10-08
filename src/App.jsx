import React, { Component } from 'react';
import Greeting from './greeting/Greeting';
export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  setName(updatedName) {
    this.setState({ name: updatedName });
  }

  render() {
    return (
      <>
        <div class="form-group">
          <label for="name">Name</label>
          <input className='form-control form-control-lg' id='name' onChange={({ target: { value } }) => this.setName(value)} placeholder="Enter your name" />
        </div>
        <Greeting className='' name={this.state.name}></Greeting>

      </>
    )
  }
}


