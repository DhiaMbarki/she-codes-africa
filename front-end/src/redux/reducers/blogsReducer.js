import {ADD_BLOG,FETCH_BLOGS} from "../actions/blogsTypes";
import FakeBlogs from "../../components/blogs/FakeBlogs";

const initState = {events : FakeBlogs};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        events: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        event: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;

