import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Topbar.css';

class Topbar extends Component {
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
          <Navbar className="TopNavbar" toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand className="BrandText" href="/">BowenView News</NavbarBrand>
          </Navbar>
        </div>
    );
  }
}

export default Topbar;
