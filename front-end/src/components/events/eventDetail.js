import { React } from "react";
import { MDBBox, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import $ from "jquery";

function EventDetails(props) {
  const id = localStorage.getItem("index");
  const [Eventtargeted, setEventtargeted] = useState("");
  const Events = props.newstate.events.fetchedevents;
  
  useEffect(() => {
    $.get(`http://localhost:3000/fetechoneevent/${(Events.length)-id +1 }`)
      .then((response) => {
        console.log("indexed Event is fetched  with succes", response);
        setEventtargeted(( response));
      })
      .catch((error) => {
        console.log("Error from Server side:", error);
      });
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <div className="list-group" style={{ margin: "20px 100px" }}>
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <MDBBox display="flex" alignSelf="center">
              <p className="font-weight-normal">{Eventtargeted.Title}</p>
            </MDBBox>
            <small>{Eventtargeted.Date}</small>
          </div>

          <p className="font-weight-light">{Eventtargeted.About}</p>
          <MDBBox display="flex" alignSelf="center">
            <p className="font-weight-normal">Status : {Eventtargeted.Status}</p>
          </MDBBox>
          <MDBBox display="flex" alignSelf="start">
            <p className="font-weight-normal">Adress : via webinar</p>
          </MDBBox>
          <MDBBtn color="primary">I am interested</MDBBtn>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { newstate: state };
};

export default connect(mapStateToProps, null)(EventDetails);

