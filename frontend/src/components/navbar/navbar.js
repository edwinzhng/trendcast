import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navibar extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <Link to="/"><NavbarBrand href="/" className = "logo">trendcast</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/artificial-intelligence" className="link"><NavLink href="/artificial-intelligence" className = "links">AI</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/blockchain" className="link"><NavLink href="/blockchain" className = "links">Blockchain</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
