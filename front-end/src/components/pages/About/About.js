import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset="0"
          animateIn="fadeInLeft"
          duration="2.4"
          animateOnce="true"
          initiallyVisible={true}
        >
          <h2 className={classes.heading}>WHAT ABOUT US?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              When you click on a link created with react-router-hash-link it
              will scroll to the element on the page with the id that matches
              the #hash-fragment in the link. This will also work for elements
              that are created after an asynchronous data load. Note that you
              must use React Router's BrowserRouter for this to work.{" "}
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
