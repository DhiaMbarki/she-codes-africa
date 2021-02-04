// sign in .js
import Button from "react-bootstrap/Button";
import { signOutAction } from "../components/store/actions/authAction";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { connect } from "react-redux";

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Sign out</h2>
        <Button type="button" onClick={this.props.SignOut}>
          logOut
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  // dispatching plain actions
  SignOut: signOutAction,
};

export default connect(null, mapDispatchToProps)(Logout);
