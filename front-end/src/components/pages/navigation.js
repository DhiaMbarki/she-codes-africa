import React from 'react'
import { Button, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user
    return (
  
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">She Codes Africa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>

    <LinkContainer to="/about">
      <Nav.Link >About</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/donate">
      <Nav.Link >Donate</Nav.Link>
    </LinkContainer>
    
    {user ? (

     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
     <LinkContainer to="/">
     <NavDropdown.Item >View profile</NavDropdown.Item>
     </LinkContainer>
     <LinkContainer to="/">
     <NavDropdown.Item >Edit profile</NavDropdown.Item>
     </LinkContainer>
     <LinkContainer to="/" >
     <NavDropdown.Item >View jobs</NavDropdown.Item>
     </LinkContainer>
     <LinkContainer to="/">
     <NavDropdown.Item >Webinar</NavDropdown.Item>
     </LinkContainer>
     <LinkContainer to="/logout">
     <NavDropdown.Item >Logout</NavDropdown.Item>
     </LinkContainer>
     </NavDropdown> ) 
     : 
     (
      <>
      <LinkContainer to="/signIn">
      <Nav.Link >Sign in</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/signUp">
      <Nav.Link >Sign up</Nav.Link>
      </LinkContainer>
      </>
      )}


    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  user : state.auth.user
})

export default connect(mapStateToProps)( NavigationBar)

