import { ADD_BLOG, FETCH_BLOGS } from "../actions/blogsTypes";

export const fetchBlogs = () => (dispatch) => {
  fetch("https://localhost:3000/fetchBlogs")
    .then((res) => res.json())
    .then((blogs) =>
      dispatch({
        type: FETCH_BLOGS,
        payload: blogs,
      })
    );
};

export const createBlog = (postBlog) => (dispatch) => {
  fetch("https://localhost:3000/createBLog", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postBlog),
  })
    .then((res) => res.json())
    .then((blog) =>
      dispatch({
        type: ADD_BLOG,
        payload: blog,
      })
    );
};
