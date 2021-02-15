import { FETCH_POSTS, ADD_EVENT } from "../actions/eventTypes";
import FakeEvents from "../../components/events/fakeEvents";

const initState = FakeEvents;
// const initialState = {
//   events: [],
//   event: {}
// };

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
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
