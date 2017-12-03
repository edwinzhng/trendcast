import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

class Header extends Component {
	scrollToAlgorithm() {
		scroll.scrollTo(600);
  }
	scrollToCategories() {
		scroll.scrollTo(1000);
  }
  render() {
    return (
	    <div className="header">
	      <h1>Trendcast</h1>
	      <p>Predicting the next big trends in AI and Blockchain</p>
	      <div className="buttons">
	        <Button inverted color='olive' className="header-button" onClick={this.scrollToAlgorithm}>Algorithm</Button>
	        <Button inverted className="header-button" onClick={this.scrollToCategories}>Categories</Button>
	      </div>
	    </div>
    );
  }
}

export default Header;
