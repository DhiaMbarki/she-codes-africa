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



function BlogDetails() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: "50px" }}>
      <MDBContainer>
        <h1 className="font-weight-bolder">
          Zoom Hero Image on Scroll ID: {id}
        </h1>
        <p className="font-weight-light">Writer: Foulen</p>

        <figure className="figure text-justify">
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/8-col/img%20(73).jpg"
            alt=""
          />
          <figcaption className="figure-caption">
            A caption for the above image.
          </figcaption>
        </figure>
        <div class="content">
          <a
            href="http://webdesignerwall.com/tutorials/how-to-add-icon-fonts-to-any-element-with-css"
            alt="webdesignerwall.com"
            target="_blank"
          >
            View Tutorial
          </a>
          <p className="text-justify font-weight-normal">
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
            sit amet fermentum. Donec sed odio operae, eu vulputate felis
            rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc
            posthac, sitientis piros Afros. Petierunt uti sibi concilium totius
            Galliae in diem certam indicere. Cras mattis iudicium purus sit amet
            fermentum. Ambitioni dedisse scripsisse iudicaretur. Cras mattis
            iudicium purus sit amet fermentum. Donec sed odio operae, eu
            vulputate felis rhoncus. Praeterea iter est quasdam res quas ex
            communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti
            sibi concilium totius Galliae in diem certam indicere. Cras mattis
            iudicium purus sit amet fermentum. Ambitioni dedisse scripsisse
            iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec
            sed odio operae, eu vulputate felis rhoncus. Praeterea iter est
            quasdam res quas ex communi. At nos hinc posthac, sitientis piros
            Afros. Petierunt uti sibi concilium totius Galliae in diem certam
            indicere. Cras mattis iudicium purus sit amet fermentum.
          </p>
          <footer>
            <p>
              A{" "}
              <a
                href="http://www.webdeisgnerwall.com"
                alt="web designer wall"
                target="_blank"
              >
                webdesignerwall.com
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
