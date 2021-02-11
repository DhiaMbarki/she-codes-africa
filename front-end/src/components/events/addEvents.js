import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../../redux/actions/eventAction';

class PostEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Date: '',
      Time:'',
      Image:'',
      Status:'',
      About:''
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
      Title: this.state.Title,
      Date: this.state.Date,
      Time: this.state.Time,
      Image: this.state.Image,
      Status: this.state.Status,
      About: this.state.About
    };

    this.props.createEvent(event);
  }

  render() {
    return (
      <div>
        <h1>Add Event</h1>
        <form onSubmit={this.onSubmit}>
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
        </form>
      </div>
    );
  }
}

PostEvent.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(null, { createEvent })(PostEvent);