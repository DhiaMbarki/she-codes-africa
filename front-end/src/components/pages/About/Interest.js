import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT WE DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF OUR EXPERTISE</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>APP Develpoment</h3>
                <p>When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's BrowserRouter for this to work. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's BrowserRouter for this to work.<br /> I have also good grasp on Node and NoSQL(MongoDb)</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>When you click on a link created with react-router-hash-link it will scroll to the element on the page with the id that matches the #hash-fragment in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's BrowserRouter for this to work. </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;