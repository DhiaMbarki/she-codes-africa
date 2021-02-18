import React from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";

const Blogs = () => {
  const blogs = useSelector((state) => {
    return state.blogs.posts;
  });
  console.log(blogs);
  return (
    <div className="row">
      {blogs.map((postItem) => (
        <PostCard postItem={postItem} />
      ))}
    </div>
  );
};

export default Blogs;
