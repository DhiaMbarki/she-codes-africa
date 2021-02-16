import React from "react";
import { Component } from "react";
import { Button, Form, Image, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import { connect } from "react-redux";
import addprofileaction from "../../redux/actions/editProfileAction";

class PostJobs extends Component {
  constructor(propos) {
    super(propos);
    console.log("props:", propos.addnewprofile);
    console.log("datasdata:", propos.datas);
    this.state = {
      Profilelimage:
        "https://www.canoetrail.co.uk/images/blog/we_are_hiring.png",
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
    // this.handlesave = this.handlesave.bind(this);
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
  //   handlesave() {
  //     $.post("http://localhost:3000/editprofile", {
  //       IdFb: "",
  //       PhotosprofileUrl: this.state.Profilelimage,
  //       Firstname: this.state.firstname,
  //       Lastname: this.state.lastname,
  //       DateOfBirth: "",
  //       Biography: this.state.biograpthy,
  //       Location: this.state.location,
  //       Githubacountlink: this.state.githubaccount,
  //       Linkedincountlink: this.state.linkedinaccount,
  //       Websiteurl: this.state.website,
  //       Engineeringareas: this.state.engnchoice,
  //       Gender: this.state.selectedGender,
  //       Howcanwehelpyousucced: this.state.selectedchoise,
  //       Companyname: this.state.companyname,
  //       Jobtitle: this.state.jobtitle,
  //       YearsOfexperience: Number(this.state.yearsintech),
  //       Codingstackinuse: this.state.codingstuckinuse,
  //       Codingstacktolearn: this.state.codingsticktolearn,
  //     })
  //       .then((response) => {
  //         console.log("res from server:", response.Savedata.Firstname);
  //         alert("Profile is  Saved with succes");
  //       })
  //       .then((response) => {
  //         this.props.addnewprofile(
  //           response.Savedata.PhotosprofileUrl,
  //           response.Savedata.Firstname,
  //           response.Savedata.Biography,
  //           response.Savedata.Githubacountlink,
  //           response.Savedata.Linkedincountlink,
  //           response.Savedata.Websiteurl
  //         );
  //         console.log(this.props);
  //       })

  //       .catch((error) => {
  //         console.log("errorfromser:", error);
  //       });
  //   }
  render() {
    return (
      <div class="container">
        <Form>
          <Form.Group>
            <Image
              src={this.state.Profilelimage}
              style={{ width: "50%", height: "50%" }}
              rounded
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              onChange={this.fileSelecHandler}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              value={this.state.firstname}
              onChange={this.handleChange}
              name="Location"
              type="text"
              placeholder="Location"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Company name</Form.Label>
            <Form.Control
              value={this.state.firstname}
              onChange={this.handleChange}
              name="Company name"
              type="text"
              placeholder="Company name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Types of employees</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={this.Changechoice}
            >
              <option value="Employment Opportunities">
                Employment Opportunities
              </option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Casual">Casual</option>
              <option value="Fixed term">Fixed term</option>
              <option value="Apprentices and trainees">
                Apprentices and trainees
              </option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handlesave}>
            Save
          </Button>
        </Form>
      </div>
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
    ) => {
      dispatch(
        addprofileaction(
          PhotosprofileUrl,
          Firstname,
          Biography,
          Githubacountlink,
          Linkedincountlink,
          Websiteurl
        )
      );
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(PostJobs);
export default Container;
