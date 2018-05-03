import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Market from './Market';
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
    const options = {
      method: 'post',
      headers: { Authorization: `Bearer ${this.state.token}` },
      url: '/markets',
      data: { name: this.state.marketName }
    };

    axios(options)
      .then((res) => {
        const market = <Market marketId={res.data.id} name={res.data.name} />
        const markets = this.state.markets.slice();
        markets.push(market);
        this.setState({ markets });
      })
      .catch(err => console.log('ERROR -->', err));
  }

  getMarkets = () => {
    const options = {
      headers: { Authorization: `Bearer ${this.state.token}` }
    };
    axios.get('/markets', options)
      .then((res) => {
        const markets = res.data.map(m => <Market marketId={m.id} name={m.name} />);
        this.setState({ markets: markets });
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
        <div>
          {this.state.markets}
        </div>
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
