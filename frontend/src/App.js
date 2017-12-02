import React, { Component } from 'react';
import Navibar from './components/navbar/navbar.js'
import Header from './components/Header/Header.js'
import Footer from './components/footer/Footer.js'
import Blockchain from './components/Blockchain/Blockchain.js'


class App extends Component {
  render() {
    return (
      <div>
        <Navibar/>
        <div className="main">
          <Header />
          <Blockchain />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
