import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import TokenForm from './TokenForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      marketName: '',
      markets: []
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
      .then(res => {
        console.log('DATA -->', res.data);
        const markets = this.state.markets.slice();
        markets.push(res.data);
        this.setState({ markets });
      })
      .catch(err => console.log('ERROR -->', err));
  }

  getMarkets = () => {
    const headers = { Authorization: `Bearer ${this.state.token}` };
    axios.get('/markets', { headers })
      .then((res) => {
        console.log('DATA -->', res.data);
        this.setState({ markets: res.data });
      })
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

  submitToken = (token) => {
    this.setState({ token });
  }

  render() {
    const form = this.state.token ? this.renderMarketForm() : <TokenForm submitToken={this.submitToken} />
    return form;
  }
}

export default App;
