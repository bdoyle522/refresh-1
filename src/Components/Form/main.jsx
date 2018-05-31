
import React, { Component } from 'react';

export default class Form extends Component {
  render() {

    return (
      <div className="form-wrapper">

      	<img src={this.props.imgLink || ""} />

      	<label>Name</label>
      	<input type="text" />

      	<label>Price</label>
      	<input label="Price" type="number" />

      </div>
    );
  }
}