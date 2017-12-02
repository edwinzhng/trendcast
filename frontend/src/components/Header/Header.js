import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll';



class Header extends Component {
	scrollToBottom() {
    Scroll.scrollToBottom();
  }
  render() {
    return (
    	<div>
      <div className="header">
        <h1>Trendcast</h1>
        <p>Predicting the next big trends in AI and Blockchain</p>
        <div className="buttons">
          <Button inverted color='olive' className="header-button" >Algorithm</Button>
          <a onClick="scrollToBottom();">Scroll to 100px from the top</a>

          <Button inverted className="header-button">Categories</Button>
        </div>
      </div>
     <div className="algorithm">
    
        </div>
      </div>
    );
  }
}

export default Header;
