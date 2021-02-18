import { React} from "react";
import { useParams } from "react-router-dom";
import fakeEvents from "./fakeEvents";
import { MDBBox, MDBBtn } from "mdbreact";

function EventDetails() {
  let { id } = useParams();

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
