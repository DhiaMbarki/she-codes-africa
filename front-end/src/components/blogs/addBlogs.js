import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEvent } from "../../redux/actions/eventAction";
import { Button,Form} from "react-bootstrap";

class PostBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "",
      Title: "",
      Author: "",
      Text: "",
      postedAt: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      Image: this.state.Image,
      Title: this.state.Title,
      Author: this.state.Author,
      Text: this.state.Text,
      postedAt: this.state.postedAt,
    };

    this.props.createEvent(event);
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

  render() {
    return (
      <div>
        <h1>Add Event</h1>
        <Form onSubmit={this.onSubmit}>
        <Form.Group >
           <Form.File id="exampleFormControlFile1"  onChange={this.fileSelecHandler} />
           </Form.Group>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.Title}
            />
          </div>
          <br />

          <div>
            <label>Date: </label>
            <br />
            <input
              type="text"
              name="Date"
              onChange={this.onChange}
              value={this.state.Date}
            />
          </div>
          <br />

          <div>
            <label>Time: </label>
            <br />
            <input
              type="text"
              name="Time"
              onChange={this.onChange}
              value={this.state.Time}
            />
          </div>
          <br />

          <div>
            <label>Status: </label>
            <br />
            <input
              type="text"
              name="Status"
              onChange={this.onChange}
              value={this.state.Status}
            />
          </div>
          <div>
            <label>About: </label>
            <br />
            <textarea
              name="About"
              onChange={this.onChange}
              value={this.state.About}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  }
}

PostBlog.propTypes = {
  createEvent: PropTypes.func.isRequired,
};

export default connect(null, { createEvent })(PostBlog);
