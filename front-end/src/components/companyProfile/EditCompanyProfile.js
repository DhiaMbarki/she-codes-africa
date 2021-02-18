import React from "react";
import { Component } from "react";

import { Button, Form, Image, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import $ from "jquery";
import { connect } from "react-redux";
import addcompanyprofileaction from "../../redux/actions/editCompanyProfileAction";

class EditCompanyProfile extends Component {
  constructor(propos) {
    super(propos);
    console.log("props:", propos.addnewprofile);
    console.log("datasdata:", propos.datas);
    this.state = {
      Profilelimage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      aboutCompany: "",
      companyName: "",
      location: "",
      website: "",
      linkedin: "",
      field: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.Changechoice = this.Changechoice.bind(this);
    this.fileSelecHandler = this.fileSelecHandler.bind(this);
    this.handlesave = this.handlesave.bind(this);
  }
  imageSelectedhandler(event) {
    console.log(event.target.files);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  Changechoice(event) {
    this.setState({ selectedchoise: event.target.value });
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
  handlesave() {
    $.post("http://localhost:3000/editprofile", {
      IdFb: "",
      PhotosprofileUrl: this.state.Profilelimage,
      aboutCompany: this.state.aboutCompany,
      companyName: this.state.companyName,
      location: this.state.location,
      website: this.state.website,
      linkedin: this.state.linkedin,
      field: this.state.field,
    })
      .then((response) => {
        console.log("res from server:", response.Savedata.Firstname);
        alert("Profile is  Saved with succes");
      })
      .then((response) => {
        this.props.addnewcompanyprofile(
          response.Savedata.PhotosprofileUrl,

          response.Savedata.companyName,
          response.Savedata.website,
          response.Savedata.location,
          response.Savedata.linkedin,
          response.Savedata.field
        );
      })
      .catch((error) => {
        console.log("errorfromUser:", error);
      });
  }

  render() {
    return (
      <div class="container">
        <Form>
          <Form.Group>
            <Image src={this.state.Profilelimage} style={{ width: "250", height: "300" }} rounded />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              onChange={this.fileSelecHandler}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About company</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              value={this.state.firstname}
              onChange={this.handleChange}
              name="firstname"
              type="text"
              placeholder="Firstname"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              className="text"
              value={this.state.location}
              onChange={this.handleChange}
              name="location"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>WEBSITE</Form.Label>
            <Form.Control
              className="text"
              value={this.state.website}
              onChange={this.handleChange}
              name="website"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>LINKEDIN</Form.Label>
            <Form.Control
              className="text"
              value={this.state.linkedinaccount}
              onChange={this.handleChange}
              name="linkedinaccount"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Field</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={this.Changechoice}
            >
              <option>Choose...</option>
              <option value="Web developement">Web developement</option>
              <option value="Mobile developement">Mobile developement</option>
              <option value="Data science">Data science</option>
              <option value="Asurrance">Asurrance</option>
              <option value="Banking">Banking</option>
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
    addnewcompanyprofile: (
      Profilelimage,
        aboutCompany,
        companyName,
        location,
        website,
        linkedin,
        field
    ) => {
      dispatch(
        addcompanyprofileaction(
          Profilelimage,
        aboutCompany,
        companyName,
        location,
        website,
        linkedin,
        field
        )
      );
    },
  };
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCompanyProfile);
export default Container;
