import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import $ from "jquery";
import { connect } from "react-redux";
import addressourceaction from "../../redux/actions/addressourcesaction";
class addCodingressource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Link: "",
      Topic: "",
      Level: "",
      Format: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesave = this.handlesave.bind(this);
    this.handleChangepage = this.handleChangepage.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleChangepage() {
    this.props.history.push("/codingResources");
  }
  handlesave() {
    $.post("http://localhost:3000/codingres", {
      Title: this.state.Title,
      Link: this.state.Link,
      Topic: this.state.Topic,
      Level: this.state.Level,
      Format: this.state.Format,
    })
      .then(() => {
        alert("Ressources is  Saved with succes");
      })
      .catch((error) => {
        console.log("Error from Server side:", error);
      });
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formGroupTitle">
            <Form.Label>
              {" "}
              <b>Add a Title for your ressource</b>
            </Form.Label>
            <Form.Control
              value={this.state.Title}
              onChange={this.handleChange}
              name="Title"
              placeholder="Exemple:Also, Why I'm learning to code.."
            />
          </Form.Group>
          <Form.Group controlId="formGroupLink">
            <Form.Label>
              <b>Add a Link for your ressource</b>
            </Form.Label>
            <Form.Control
              value={this.state.Link}
              onChange={this.handleChange}
              name="Link"
              placeholder="https://www..."
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Label>
                <b>Add a Topic for your ressource </b>
              </Form.Label>
              <Form.Control
                value={this.state.Topic}
                onChange={this.handleChange}
                name="Topic"
                placeholder="Exemple:HTML\CSS..."
              />
            </Col>
            <Col>
              <Form.Label>
                <b>Specify a Level of your ressource</b>{" "}
              </Form.Label>
              <Form.Control
                value={this.state.Level}
                onChange={this.handleChange}
                name="Level"
                placeholder="Exmple:Beginner,Intermediate,Advanced ...."
              />
            </Col>
          </Row>
          <Form.Group controlId="formGroupFormat">
            <Form.Label>
              <b>Specify a Format of your ressource</b>{" "}
            </Form.Label>
            <Form.Control
              value={this.state.Format}
              onChange={this.handleChange}
              name="Format"
              placeholder="Exmple:Blog,Article,Book,Tutorial..."
            />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="outline-info" onClick={this.handlesave}>
                Add my ressource
              </Button>
            </Col>
            <Col>
              <Button variant="outline-info" onClick={this.handleChangepage}>
                View Ressources
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { newstate: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addnewressource: (arr) => dispatch(addressourceaction(arr)),
  };
};

const Container = connect(
  mapStateToProps,
  null
)(addCodingressource);
export default Container;
