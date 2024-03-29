import React from "react";
import { deletePost } from "../../redux/actions/blogsAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PostBlogs = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        {
          <img
            src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
            alt={postItem.title}
            className="card-img-top"
          />
        }
        {
          <Link
            to={`/updatePost/${postItem.id}`}
            className="btn btn-danger btn-edit"
          >
            <span class="material-icons">edit</span>
          </Link>
        }
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span class="material-icons">delete </span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="mb-1"> read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostBlogs;
