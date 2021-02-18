
import React from "react";
import { Component } from "react";
import { Button,Form,Image ,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { connect } from "react-redux";
import addprofileaction from "../../redux/actions/editProfileAction";

class EditProfile extends Component {
  constructor(propos) {
    super(propos);
    console.log("props:", propos.addnewprofile);
    console.log("datasdata:", propos.datas);
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
  handlesave() {
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
        console.log("res from server:", response.Savedata.Firstname);
        alert("Profile is  Saved with succes");
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
<div class="container">
      <Form>
           <Form.Group >
           <Image src={this.state.Profilelimage} rounded />
           </Form.Group>
           <Form.Group >
           <Form.File id="exampleFormControlFile1"  onChange={this.fileSelecHandler} />
           </Form.Group>


           <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>About me</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>



        <Form.Group controlId="formBasicEmail">
          <Form.Label>Firstname</Form.Label>
          <Form.Control value={this.state.firstname} onChange={this.handleChange} name="firstname" type="text" placeholder="Firstname" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Lastname</Form.Label>
          <Form.Control value={this.state.lastname} onChange={this.handleChange} name="lastname" type="text" placeholder="Lastname" />
        </Form.Group>


        <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="female"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="female"
          checked={this.state.selectedGender === "Female"} onChange={this.ChangeGender} 
        />
        <Form.Check
          type="radio"
          label="male"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          value="Male" onChange={this.ChangeGender}
        />
      </Col>
    </Form.Group>


    <Form.Group >
          <Form.Label>City</Form.Label>
          <Form.Control className="text" value={this.state.location} onChange={this.handleChange} name="location"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>Biography</Form.Label>
          <Form.Control className="text" value={this.state.biograpthy} onChange={this.handleChange} name="biograpthy"/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridState">
      <Form.Label>HOW CAN WE HELP YOU SUCCEED?</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." onChange={this.Changechoice}>
        <option>Choose...</option>
        <option value="Employment Opportunities"  >Employment Opportunities</option>
        <option value="Scholarships"  >Scholarships</option>
        <option value="Career Coaching"  >Career Coaching</option>
        <option value="Inspiration"  >Inspiration</option>
        <option value="Career Advancement"  >Career Advancement</option>
        <option value="Leadership Opportunities"  >Leadership Opportunities</option>
      </Form.Control>
    </Form.Group>

    <Form.Group >
          <Form.Label>WEBSITE</Form.Label>
          <Form.Control className="text" value={this.state.website} onChange={this.handleChange} name="website"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>GITHUB</Form.Label>
          <Form.Control className="text" value={this.state.website} onChange={this.handleChange} name="githubaccount"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>LINKEDIN</Form.Label>
          <Form.Control className="text" value={this.state.linkedinaccount} onChange={this.handleChange} name="linkedinaccount"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>WHERE DO YOU WORK?</Form.Label>
          <Form.Control className="text" value={this.state.companyname} onChange={this.handleChange} name="companyname"/>
        </Form.Group>

        <Form.Group >
          <Form.Label>JOB TITLE</Form.Label>
          <Form.Control className="text" value={this.state.jobtitle} onChange={this.handleChange} name="jobtitle"/>
        </Form.Group>


        <Form.Group >
          <Form.Label>HOW MANY YEARS HAVE YOU BEEN IN TECH?</Form.Label>
          <Form.Control className="text" value={this.state.yearsintech} onChange={this.handleChange} name="yearsintech"/>
        </Form.Group>


        <Form.Group as={Col} controlId="formGridState">
      <Form.Label>WHAT ARE YOUR ENGINEERING AREAS OF INTEREST?</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." onChange={this.ChangeEnngenchoice}>
        <option>Choose...</option>
        <option value="Architecture"  >Architecture</option>
        <option value="Analytics"  >Analytics</option>
        <option value="Data Science"  >Data Science</option>
        <option value="Mobile"  >Mobile</option>
        <option value="Mobile"  >Mobile</option>
        <option value="Web"  >Web</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>WHAT CODING STACK DO YOU USE PROFESSIONALLY?</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." onChange={this.Changestackinuse}>
        <option>Choose...</option>
        <option value="JavaScript"  >JavaScript</option>
        <option value="c++ or Java"  >c++ / Java</option>
        <option value="Angular"  >Angular</option>
        <option value="Vue"  >Vue</option>
        <option value="Direct SQL"  >Direct SQL</option>
        <option value="NO SQL databases"  >NO SQL databases</option>
        <option value="Docker" >Docker</option>
        <option value="Open to learn anything">Open to learn anything </option>
        <option value="HTML/CSS">HTML/CSS</option>
        <option value="Grails" >Grails</option>
      </Form.Control>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>WHAT CODING STACK DO YOU USE PROFESSIONALLY?</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." onChange={this.Changestackinuse}>
        <option>Choose...</option>
        <option value="JavaScript"  >JavaScript</option>
        <option value="c++ or Java"  >c++ / Java</option>
        <option value="Angular"  >Angular</option>
        <option value="Vue"  >Vue</option>
        <option value="Direct SQL"  >Direct SQL</option>
        <option value="NO SQL databases"  >NO SQL databases</option>
        <option value="Docker" >Docker</option>
        <option value="Open to learn anything">Open to learn anything </option>
        <option value="HTML/CSS">HTML/CSS</option>
        <option value="Grails" >Grails</option>
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
const Container = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default Container;

