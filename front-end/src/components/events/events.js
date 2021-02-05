
import React, { Component } from 'react'
import Card from "react-bootstrap/Card"
import FakeEvents from './fakeEvents'
import { useHistory } from "react-router-dom";

 class Events extends Component {
    constructor(propos){
    super(propos);
    this.state={
        FakeEvents :FakeEvents
    }
    }
//  history = useHistory();
//  displayEvent = () => history.push("/displayEvent");


    render() {
        const eventItems = this.state.FakeEvents.map((event,index) => (
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>{event.Title}</Card.Title>
              <Card.Text>{event.Status}</Card.Text>
              <Card.Text>{event.About}</Card.Text>
              <Card.Link href="#">Read More</Card.Link>
              <hr />
            </Card.Body>
          </Card>
        ))
        return (
            <div>
                <h1>Events </h1>
                {eventItems}
            </div>
        )
    }
}
export default Events;


