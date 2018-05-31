import React, { Component } from 'react';
import Dashboard from "./Components/Dashboard/main";
import Form from "./Components/Form/main";
import Header from "./Components/Header/main";

require("./App.css");

export default class App extends Component {
  render() {
    return (
      <div className="page-wrapper">

        <Header className="header"/>

        <div>

          <Dashboard />

          <Form />

        </div>

      </div>
    );
  }
}
