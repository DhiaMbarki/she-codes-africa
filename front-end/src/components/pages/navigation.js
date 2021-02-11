import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/authActions";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, signout } = this.props;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">She Codes Africa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/donate">
              <Nav.Link>Donate</Nav.Link>
            </LinkContainer>
            {user ? (
              <Nav>
                <LinkContainer
                  to={{
                    pathname: "/blogs",
                  }}
                >
                  <Nav.Link>Blogs</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/events">
                  <Nav.Link>Upcoming events</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <LinkContainer to="/viewprofile">
                    <NavDropdown.Item>View profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/editProfile">
                    <NavDropdown.Item>Edit profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/viewJobs">
                    <NavDropdown.Item>View jobs</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/codingResources">
                    <NavDropdown.Item>Coding Resources</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavDropdown.Item>Webinar</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={signout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <>
                <LinkContainer to="/signIn">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signUp">
                  <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
