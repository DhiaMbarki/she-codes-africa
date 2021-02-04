// sign in .js
import Button from "react-bootstrap/Button";
import { signOutAction } from "../components/store/actions/authAction";
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { connect } from "react-redux";

class Logout extends React.Component {
    constructor(props) {
    super(props);
    }


  render() {
    return (
        <div>
          <h2>Sign out</h2>
          <Button type="button" onClick={(e) =>{
            this.props.SignOut()
          }}>
            {this.props.user?.email}
          </Button>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      SignOut: () => dispatch({ type: 'SIGN_OUT' })
    }
  }

export default connect(mapDispatchToProps ,{signOutAction}) (Logout);