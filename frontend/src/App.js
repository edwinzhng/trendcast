import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
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
          <Switch>
            <Route exact path='/' component={ Blockchain }/>
            <Route path='/artificial-intelligence' component={ Blockchain }/>
            <Route path='/blockchain' component={ Blockchain }/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
