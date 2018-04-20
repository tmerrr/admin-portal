import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { marketName: '' };
  }

  handleChange = (event) => {
    this.setState({ marketName: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`you submitted: ${this.state.marketName}`);
  }

  render() {
    return (
      <div>
        <h3>Create a Market</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Market Name" onChange={this.handleChange} />
          <input type="submit" name="confirm" value="Confirm" />
        </form>
      </div>
    );
  }
}

// token:
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6eyJ1c2VySWQiOiJiMzg2YzNlNy0xYmZkLTRiMGYtODFlYi01MjU2NDg1M2I3ZmIiLCJ1c2VyVHlwZSI6ImFkbWluIiwibWFya2V0SWQiOiJhZGFlMmNlZi0wOWEwLTQ3MjYtOTZhNS00MDE3YTI4MzA2ZTMifSwiZXhwIjoxNTM5NzgwODEwLCJpYXQiOjE1MjQwNjMzMTl9.y4XCxyx6HGF8g9LeNaz-CGOGoPDza6rcB-LzIMPTC3I

export default App;
