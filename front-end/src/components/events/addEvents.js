import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEvent } from "../../redux/actions/eventAction";
import { Button, Form, Row, Col } from "react-bootstrap";

class PostEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Date: "",
      Time: "",
      Image: "https://365psd.com/images/istock/previews/5862/58629006-event-icon.jpg",
      Status: "",
      About: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fileSelecHandler = this.fileSelecHandler.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      Image: this.state.Image,
      Title: this.state.Title,
      Date: this.state.Date.toString(),
      Time: this.state.Time.toString(),
      Status: this.state.Status,
      About: this.state.About,
    };

    this.props.createEvent(event);
  }
  fileSelecHandler(event) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ Image: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  render() {
    return (
      <div>
        <h1>
          <b>Complete and submit this form to add an Event </b>
        </h1>
        <hr />
        <Form onSubmit={this.onSubmit}>
        <img id="eventimage"
            src={this.state.Image}
          />
          <Form.Group>
            <Form.File
            style={{ display: 'none' }} ref={filein => this.filein = filein}
              id="exampleFormControlFile1"
              onChange={this.fileSelecHandler}
            />
          </Form.Group>
          <Button variant="dark"  onClick={() => this.filein.click()}  > <b>Choose an Image</b></Button>
          <hr />
          <Form.Group controlId="eventsTitle">
            <Form.Label>
              {" "}
              <b>Event Title </b>{" "}
            </Form.Label>
            <Form.Control
              name="Title"
              onChange={this.onChange}
              value={this.state.Title}
              name="Title"
              onChange={this.onChange}
              value={this.state.Title}
              type="text"
              placeholder="Exmple : Women in tech "
            />
            <Form.Text className="text-muted">
            <b> Enter the Event Title .</b>
            </Form.Text>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="eventDate">
                <Form.Label>
                  {" "}
                  <b>Date of Happening</b>{" "}
                </Form.Label>
                <Form.Control
                  name="Date"
                  onChange={this.onChange}
                  value={this.state.Date}
                  type="text"
                  placeholder="Exmple : Thursday, February 4, 2021"
                />
                <Form.Text className="text-muted">
                <b> Set a date for the event.</b>
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="eventtTime">
                <Form.Label>
                  <b>Time of Happening</b>{" "}
                </Form.Label>
                <Form.Control
                  name="Time"
                  onChange={this.onChange}
                  value={this.state.Time}
                  type="text"
                  placeholder="Exmple :   6:00 PM  8:45 PM"
                />
                <Form.Text className="text-muted">
                <b>Set a Time for the event.</b>
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="eventstatus">
            <Form.Label>
              {" "}
              <b>Event Status </b>
            </Form.Label>
            <Form.Control
              name="Status"
              onChange={this.onChange}
              value={this.state.Status}
              type="text"
              placeholder="Exmple : Presential / on-line "
            />
            <Form.Text className="text-muted">
            <b>Define the event status.</b>
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="eventAbout">
            <Form.Label> <b>Information about the event </b></Form.Label>
            <Form.Control     name="About"
              onChange={this.onChange}
              value={this.state.About}
              type="text"
              placeholder="In this series, we will be exploring ..."  as="textarea" rows={3} />
            <Form.Text className="text-muted">
            <b>Enter the detailed information about the event</b>
            </Form.Text>
          </Form.Group>
          <Button variant="dark" type="submit">
            <b>Save the event </b>
          </Button>
        </Form>
      </div>
    );
  }
}

PostEvent.propTypes = {
  createEvent: PropTypes.func.isRequired,
};

export default connect(null, { createEvent })(PostEvent);

