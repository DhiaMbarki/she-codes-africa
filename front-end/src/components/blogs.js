// Blogs.js

import React, { Component } from "react";

import { ListGroup, ListGroupItem, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogsCard from './blogCard'

class Blogs extends Component {
  render() {
    return (
      <div>
        <h2>Blogs</h2>
        <BlogsCard/>
      </div>
    );
  }
}

export default Blogs;
