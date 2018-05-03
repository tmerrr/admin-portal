import React, { Component } from 'react';

export default class Market extends Component {
  render() {
    return (
      <div>
        ID: {this.props.marketId}
        Name: {this.props.name}
      </div>
    )
  }
}