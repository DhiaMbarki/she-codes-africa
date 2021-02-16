import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { signout } from "../../redux/actions/authActions";

import { connect } from "react-redux";

import MemberBoard from "../pages/memberBoard";
import CompanyBoard from "../pages/companyBoard";
import AdminBoard from "../pages/adminBoard";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, signout } = this.props;
    var fakeUser = "User";

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
            {user && user.type === "Admin" ? (
              <AdminBoard />
            ) : user && user.type === "User" ? (
              <MemberBoard />
            ) : user && user.type === "Company" ? (
              <CompanyBoard />
            ) : (
              <Nav>
                <LinkContainer to="/signIn">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signUp">
                  <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
              </Nav>
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
