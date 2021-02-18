
import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { signout } from "../../redux/actions/authActions";
import { connect } from "react-redux";

class CompanyBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, signout } = this.props;
    return (
      <>
        <Nav>
          <LinkContainer to="/blogs">
            <Nav.Link>Blogs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/events">
            <Nav.Link>Upcoming events</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Company Profile" id="collasible-nav-dropdown" menuAlign="left">
            <LinkContainer to="/viewCompanyProfile">
              <NavDropdown.Item>View profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/editCompanyProfile">
              <NavDropdown.Item>Edit profile</NavDropdown.Item>
            </LinkContainer>
            {
              <LinkContainer to="/postJobs">
                <NavDropdown.Item>Post job</NavDropdown.Item>
              </LinkContainer>
            }
            <LinkContainer to="/codingResources">
              <NavDropdown.Item>Coding Resources</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/webinar">
              <NavDropdown.Item>Webinar</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/">
              <NavDropdown.Item onClick={signout}>Logout</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(CompanyBoard);

