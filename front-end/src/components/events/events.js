import React, { Component } from 'react'
import FakeEvents from './fakeEvents'

 class Events extends Component {
    constructor(propos){
    super(propos);
    this.state={
        FakeEvents :FakeEvents
    }
    }
    render() {
        const eventItems = this.state.FakeEvents.map((event,index) => (
            <div key={index}> 
            <h3>{event.Title}</h3>
            <h4>{event.Status}</h4>
            <p>{event.About}</p>
            </div>
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
