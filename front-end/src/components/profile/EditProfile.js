import React from "react";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import $ from "jquery";
import { connect } from "react-redux";
import addprofileaction from "../../redux/actions/editProfileAction";


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profilelimage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      firstname: "",
      lastname: "",
      location: "",
      biograpthy: "",
      selectedGender: "",
      selectedchoise: "",
      website: "",
      githubaccount: "",
      linkedinaccount: "",
      companyname: "",
      jobtitle: "",
      yearsintech: "",
      engnchoice: "",
      codingstuckinuse: "",
      codingsticktolearn: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.ChangeGender = this.ChangeGender.bind(this);
    this.Changechoice = this.Changechoice.bind(this);
    this.ChangeEnngenchoice = this.ChangeEnngenchoice.bind(this);
    this.Changestackinuse = this.Changestackinuse.bind(this);
    this.Changestacktolearn = this.Changestacktolearn.bind(this);
    this.fileSelecHandler = this.fileSelecHandler.bind(this);
    this.handlesave = this.handlesave.bind(this);
    this.handleChangepage = this.handleChangepage.bind(this);
  }
  handleChangepage() {
    this.props.history.push("/viewprofile");
  }
  imageSelectedhandler(event) {
    console.log(event.target.files);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  ChangeGender(event) {
    this.setState({ selectedGender: event.target.value });
  }
  Changechoice(event) {
    this.setState({ selectedchoise: event.target.value });
  }
  ChangeEnngenchoice(event) {
    this.setState({ engnchoice: event.target.value });
  }
  Changestackinuse(event) {
    this.setState({ codingstuckinuse: event.target.value });
  }
  Changestacktolearn(event) {
    this.setState({ codingsticktolearn: event.target.value });
  }
  fileSelecHandler(event) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ Profilelimage: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  handlesave(e) {
    e.preventDefault();
    $.post("http://localhost:3000/editprofile", {
      IdFb: "",
      PhotosprofileUrl: this.state.Profilelimage,
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      DateOfBirth: "",
      Biography: this.state.biograpthy,
      Location: this.state.location,
      Githubacountlink: this.state.githubaccount,
      Linkedincountlink: this.state.linkedinaccount,
      Websiteurl: this.state.website,
      Engineeringareas: this.state.engnchoice,
      Gender: this.state.selectedGender,
      Howcanwehelpyousucced: this.state.selectedchoise,
      Companyname: this.state.companyname,
      Jobtitle: this.state.jobtitle,
      YearsOfexperience: Number(this.state.yearsintech),
      Codingstackinuse: this.state.codingstuckinuse,
      Codingstacktolearn: this.state.codingsticktolearn,
    })
      .then((response) => {
        alert("Profile is  Saved with succes");
        return response;
      })
      .then((response) => {
        this.props.addnewprofile(
          response.Savedata.PhotosprofileUrl,
          response.Savedata.Firstname,
          response.Savedata.Biography,
          response.Savedata.Githubacountlink,
          response.Savedata.Linkedincountlink,
          response.Savedata.Websiteurl
        );
      })

      .catch((error) => {
        console.log("errorfromser:", error);
      });
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { datas: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addnewprofile: (
      PhotosprofileUrl,
      Firstname,
      Biography,
      Githubacountlink,
      Linkedincountlink,
      Websiteurl
    ) =>
      dispatch(
        addprofileaction(
          PhotosprofileUrl,
          Firstname,
          Biography,
          Githubacountlink,
          Linkedincountlink,
          Websiteurl
        )
      ),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default Container;
 