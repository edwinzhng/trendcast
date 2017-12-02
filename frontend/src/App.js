import React, { Component } from 'react';
import Navibar from './components/navbar/navbar.js'
import Header from './components/Header/Header.js'

class App extends Component {
  render() {
    return (
      <div>
      <Navibar/>
        <Header />
      </div>
    );
  }
}

export default App;
