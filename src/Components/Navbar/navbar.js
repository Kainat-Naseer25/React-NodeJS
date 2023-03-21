import { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './id-card-white.svg';
import logout from './logoutIcon.svg';

export default class MyNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar color="#007bff" dark expand="md" style={{ backgroundColor: '#007bff', paddingRight: '10px' }}>
          <NavbarBrand style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" width="32" height="32" className="d-inline-block align-text-top" style={{ marginRight: '10px' }} />
            <NavLink  style={{ color: '#fff', fontSize: 'larger', fontWeight: 'bold', textDecoration: 'none' }}>Cloud Contacts</NavLink>
            
          </NavbarBrand>
          <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
            <NavItem className="mr-3" style={{ color: '#fff', fontWeight: 'bold', fontSize: 'larger', paddingRight:'10px' }}>
              Hello Sultan Dine
            </NavItem>
            <NavItem>
              <a href="/" style={{ display: 'flex', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                <span style={{ marginRight: '10px', fontWeight: 'bold', fontSize: 'larger' }}>Logout</span>
                <img src={logout} alt="Logo" width="20" height="20" className="d-inline-block align-text-top" />
              </a>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
