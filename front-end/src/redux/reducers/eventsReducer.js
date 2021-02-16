import {ADD_EVENT,FETCH_EVENTS } from "../actions/eventTypes";
import FakeEvents from "../../components/events/fakeEvents";

const initState = {events : FakeEvents};


const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
