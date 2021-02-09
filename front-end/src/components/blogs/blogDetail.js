import { React, useState } from "react";
import Heart from "react-heart";

import {
   useParams,
} from "react-router-dom";

import { MDBContainer} from "mdbreact";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import { useSelector } from 'react-redux';


function BlogDetails() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [active, setActive] = useState(false);
  const blog = useSelector((state) => {return state.blogs.filter(x=>{return (x.author === id)})[0]})
  console.log('id',id)
  console.log(blog)
  return (
    <div style={{ padding: "50px" }}>
      <MDBContainer>
        <h1 className="font-weight-bolder">
        {blog.title}
        </h1>
        <p className="font-weight-light">Writer: {blog.author}</p>

        <figure className="text-justify font-weight-normal">
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg"
            alt=",,,"
            className="text-justify font-weight-normal"
          />
        </figure>
        <div class="content">
          <p className="text-justify font-weight-normal">
          {blog.text}
          </p>
          <footer>
            <p>
              A{" "}
              <a
                href={blog.link}
                alt="web designer wall"
                target="_blank"
              >
                View Resource
              </a>{" "}
              Tutorial
            </p>
            <FacebookShareButton
              url={"http://www.camperstribe.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <FacebookIcon size={36} />
            </FacebookShareButton>

            <TwitterShareButton
              url={"http://www.camperstribe.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <TwitterIcon size={36} />
            </TwitterShareButton>

            <LinkedinShareButton
              url={"http://www.camperstribe.com"}
              quote={"CampersTribe - World is yours to explore"}
              hashtag="#camperstribe"
            >
              <LinkedinIcon size={36} />
            </LinkedinShareButton>
          </footer>
          <div style={{ paddingTop: "20px" }}>
            {/* <p className="text-justify"><MDBIcon far icon="heart" size="2x" className="indigo-text pr-3 " onClick={()=>{console.log('clicked')}} />I like this article</p> */}

            <p style={{ paddingLeft: "5px" }}>I like this article</p>

            <div style={{ width: "2rem"}}>
              
              <Heart
                isActive={active}
                onClick={() => setActive(!active)}
                activeColor="blue"
                inactiveColor="blue"
                animationTrigger="hover"
                animationScale={1.5}
              />
            </div>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default BlogDetails;
