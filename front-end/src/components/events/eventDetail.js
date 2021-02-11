import { React, useState } from "react";
import Heart from "react-heart";

import { useParams } from "react-router-dom";

import { MDBContainer } from "mdbreact";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import fakeEvents from "./fakeEvents";
import { MDBBox, MDBBtn } from "mdbreact";

function EventDetails() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: "50px" }}>
      <div className="list-group" style={{ margin: "20px 100px" }}>
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <MDBBox display="flex" alignSelf="center">
              <p className="font-weight-normal">{fakeEvents[id].Title}</p>
            </MDBBox>
            <small>{fakeEvents[id].Date}</small>
          </div>

          <p className="font-weight-light">{fakeEvents[id].About}</p>
          <MDBBox display="flex" alignSelf="center">
            <p className="font-weight-normal">Status : /</p>
          </MDBBox>
          <MDBBox display="flex" alignSelf="start">
            <p className="font-weight-normal">
              Adress : via webinar or physical location.
            </p>
          </MDBBox>
          <MDBBtn color="primary">I am interested</MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
