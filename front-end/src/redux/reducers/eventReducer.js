import { FETCH_EVENTS } from "../actions/eventTypes";

const initialState = {
  events: [],
  event: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
