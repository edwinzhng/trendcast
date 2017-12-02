import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navibar from './components/navbar/navbar.js'
import Home from './components/Home/Home.js'
import Footer from './components/footer/Footer.js'
import Blockchain from './components/Blockchain/Blockchain.js'
import AI from './components/AI/AI.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navibar/>
        <div className="main">
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/artificial-intelligence' component={ AI }/>
            <Route path='/blockchain' component={ Blockchain }/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
