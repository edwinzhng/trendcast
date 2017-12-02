import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Trendcast</h1>
        <p>Predicting the next big trends in AI and Blockchain</p>
        <div className="buttons">
          <Button inverted color='olive' className="header-button">Algorithm</Button>
          <Button inverted className="header-button">Categories</Button>
        </div>
      </div>
    );
  }
}

export default Header;
