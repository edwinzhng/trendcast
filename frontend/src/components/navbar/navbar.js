import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Navbar, Nav, NavItem } from 'reactstrap';

class Navibar extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link to="/" className = "logo">trendcast</Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/artificial-intelligence" className="link links">AI</Link>
              </NavItem>
              <NavItem>
                <Link to="/blockchain" className="link links">Blockchain</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
