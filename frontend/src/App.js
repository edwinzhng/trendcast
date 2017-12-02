import React, { Component } from 'react';
import Navibar from './components/navbar/navbar.js'
import Header from './components/Header/Header.js'
import Footer from './components/footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navibar/>
        <div className="main">
          <Header />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
