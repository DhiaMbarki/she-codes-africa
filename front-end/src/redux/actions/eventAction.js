import { FETCH_EVENTS, ADD_EVENT } from "../actions/eventTypes";



export const fetchEvent = () => dispatch => {
    fetch('https://localhost:3000/fetchEvent')
      .then(res => res.json())
      .then(events =>
        dispatch({
          type: FETCH_EVENTS,
          payload: events
        })
      );
  };
  
  export const createEvent = postEvent => dispatch => {
    fetch('https://localhost:3000/createEvent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postEvent)
    })
      .then(res => res.json())
      .then(event =>
        dispatch({
          type: ADD_EVENT,
          payload: event
        })
      );
  };