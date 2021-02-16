<<<<<<< HEAD
import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "./types";

// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// create a post
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

// update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// delete a post
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
=======
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
>>>>>>> ae4d4867ce21df429699c2f38d8da65e88933046
