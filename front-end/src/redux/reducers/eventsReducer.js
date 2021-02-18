import {ADD_EVENT,FETCH_EVENTS } from "../actions/eventTypes";
import FakeEvents from "../../components/events/fakeEvents";

const initState = {fetchedevents : [],
  addedevents :[]
};


const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        fetchedevents:[...state.fetchedevents ,...action.payload ]
      };
    case ADD_EVENT:
      return {
        ...state,
        addedevents: [...state.addedevents ,...action.payload ],
      };
    default:
      return state;
  }
};

export default eventReducer;

