import { FETCH_EVENTS, ADD_EVENT } from "../actions/eventTypes";

export function fetchEvent() {
  return function (dispatch) {
    fetch("https://localhost:3000/fetchEvent")
      .then((res) => res.json())
      .then((events) =>
        dispatch({
          type: FETCH_EVENTS,
          payload: events,
        })
      );
  };
}

export function createEvent(postEvent) {
  const postEvent1 = JSON.stringify(postEvent);
  return function (dispatch) {
    fetch("http://localhost:3000/createEvent", {
      method: "POST",
      body: postEvent1,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        alert("Event  is  Saved with succes");
      console.log ( "Event  received  from server after have  been saved " ,response);
        dispatch({
           type: ADD_EVENT,
           payload: response.Savedata
         })
        }).catch(Erorr=> console.error("Error:",Erorr))
}
}
