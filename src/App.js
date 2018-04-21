import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasToken: false,
      token: null,
      marketName: ''
    };
  }

  changeMarketName = (event) => {
    this.setState({ marketName: event.target.value });
  }

  submitMarket = (event) => {
    event.preventDefault();
    const headers = { Authorization: `Bearer ${this.state.token}` };
    const body = { name: this.state.marketName };

    axios({
      method: 'post',
      headers,
      url: '/markets',
      data: body
    })
      .then(res => console.log('BODY -->', res))
      .catch(err => console.log('ERROR -->', err));
  }

  getMarkets = () => {
    const headers = { Authorization: `Bearer ${this.state.token}` };
    axios.get('/markets', { headers })
      .then(res => console.log('DATA -->', res.data))
      .catch(err => console.log('ERROR -->', err));
  }

  renderMarketForm = () => {
    return (
      <div>
        <h3>Create a Market</h3>
        <button onClick={this.getMarkets}>Get Markets</button>
        <form onSubmit={this.submitMarket}>
          <input type="text" name="name" placeholder="Market Name" onChange={this.changeMarketName} />
          <input type="submit" name="confirmName" value="Confirm" />
        </form>
      </div>
    );
  }

  updateToken = (event) => {
    this.setState({ token: event.target.value });
  }

  submitToken = (event) => {
    event.preventDefault();
    this.setState({ hasToken: true });
  }

  renderTokenForm = () => {
    return (
      <div>
        <h3>Please Enter Your Token</h3>
        <form onSubmit={this.submitToken}>
          <input type="text" name="token" placeholder="Enter Token" onChange={this.updateToken} />
          <input type ="submit" name="confirmToken" />
        </form>
      </div>
    );
  }

  render() {
    const form = this.state.hasToken ? this.renderMarketForm() : this.renderTokenForm();
    return form;
  }
}

export default App;
