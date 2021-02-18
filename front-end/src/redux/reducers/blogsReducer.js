import {ADD_BLOG,FETCH_BLOGS} from "../actions/blogsTypes";
import FakeBlogs from "../../components/blogs/FakeBlogs";

const initState = {Fetchedblogs : [],Addedblogs:[]};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        Fetchedblogs:[...state.Fetchedblogs ,...action.payload ]
      };
    case ADD_BLOG:
      return {
        ...state,
        Addedblogs:[...state.Addedblogs ,...action.payload ]
      };
    default:
      return state;
  }
};

export default blogReducer;


