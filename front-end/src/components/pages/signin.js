// sign in .js
import Button from "react-bootstrap/Button";
import { signInAction } from "../../redux/actions/authAction"
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { connect } from "react-redux";

class SignIn extends React.Component {
    constructor(props) {
    super(props);
    }


  render() {
    return (
        <div>
          <h2>Sign in</h2>
          <Button type="button" onClick={(e) =>{
            this.props.signInAction({email : "hhhh", password : "sss"})
          }}>
            {this.props.user?.email}
          </Button>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  user : state.auth.user
})

export default connect(mapStateToProps ,{signInAction}) (SignIn);