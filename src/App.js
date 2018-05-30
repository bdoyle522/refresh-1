import React, { Component } from 'react';
import Dashboard from "./Components/Dashboard/main";
import Form from "./Components/Form/main";
import Header from "./Components/Header/main";

class App extends Component {
  render() {
    return (
      <div>

        <Dashboard />
        <Form />
        <Header />
        
      </div>
    );
  }
}

export default App;
