import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Trendcast</h1>
        <div className="buttons">
          <Button inverted color='blue' className="header-button">Trending</Button>
          <Button basic color='teal' className="header-button">Search</Button>
        </div>
      </div>
    );
  }
}

export default Header;
