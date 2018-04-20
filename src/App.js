import React, { Component } from 'react';
import axios from 'axios';
import { token } from './token';
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
    const options = { headers: { Authorization: `Bearer ${token}` } };
    axios.post('/markets', options)
      .then(res => console.log('BODY -->', res))
      .catch(err => console.log('ERROR -->', err));
  }

  getMarkets = () => {
    axios.get('/markets', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => console.log('BODY -->', res))
      .catch(err => console.log('ERROR -->', err));
  }

  render() {
    return (
      <div>
        <h3>Create a Market</h3>
        <button onClick={this.getMarkets}>Get Markets</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Market Name" onChange={this.handleChange} />
          <input type="submit" name="confirm" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default App;
