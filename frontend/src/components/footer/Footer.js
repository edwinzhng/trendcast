import React, { Component } from 'react';
import './footer.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

class Footer extends Component {
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


      <div className="foot">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className = "title">trendcast</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <p className = "made">Made with &hearts; at YHack 2017</p>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
