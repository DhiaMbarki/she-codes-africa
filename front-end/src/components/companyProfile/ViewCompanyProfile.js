import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { MDBBox, MDBBtn, MDBCol, MDBRow } from "mdbreact";

import { useHistory } from "react-router-dom";


var fakeEvents = [
  {
    Title: "women in tech",
    Date: "Tuesday, February 2, 2021",
    Time: "9:30 AM - 11:00 AM",
    Image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog%20image&ved=2ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ",
    Status: "online event",
    About:
      "Do you work in tech? Do you have a technical background? Are you interested in tech with the way the world is changing and how we can use technology to sell? If this is you then The Women in Tech Mastermind Group is for you!",
  },
  {
    Title: "Women’s Health Tech Wednesday | Verbena",
    Date: "Wednesday, February 3, 2021",
    Time: "4:30 PM  5:00 PM",
    Image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog%20image&ved=2ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ",
    Status: "online event",
    About:
      "Do you work in tech? Do you have a technical background? Are you interested in tech with the way the world is changing and how we can use technology to sell? If this is you then The Women in Tech Mastermind Group is for you!",
  },
  {
    Title: "2021 For(bes) The Culture Culturally Accountable Summit",
    Date: "Thursday, February 4, 2021",
    Time: "6:00 PM  8:45 PM",
    Image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog%20image&ved=2ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ",
    Status: "online event",
    About:
      "Do you work in tech? Do you have a technical background? Are you interested in tech with the way the world is changing and how we can use technology to sell? If this is you then The Women in Tech Mastermind Group is for you!",
  },
  {
    Title: "2021 For(bes) The Culture Culturally Accountable Summit",
    Date: "Thursday, February 4, 2021",
    Time: "6:00 PM  8:45 PM",
    Image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog%20image&ved=2ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ",
    Status: "online event",
    About:
      "Do you work in tech? Do you have a technical background? Are you interested in tech with the way the world is changing and how we can use technology to sell? If this is you then The Women in Tech Mastermind Group is for you!",
  },
  {
    Title: "The Culture Culturally ",
    Date: "Thursday, February 4, 2021",
    Time: "6:00 PM  8:00 PM",
    Image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fdog-puppy-on-garden-royalty-free-image-1586966191.jpg%3Fcrop%3D1.00xw%3A0.669xh%3B0%2C0.190xh%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&tbnid=wzRcY9R2ANhK-M&vet=12ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ..i&docid=2r6Arj4-hBjhNM&w=1200&h=602&q=dog%20image&ved=2ahUKEwjLqeuO8cruAhWF7qQKHX99BkgQMygAegUIARDOAQ",
    Status: "online event",
    About:
      "Do you work in tech? Do you have a technical background? Are you interested in tech with the way the world is changing and how we can use technology to sell? If this is you then The Women in Tech Mastermind Group is for you!",
  },
];

export default function ViewCompanyProfile() {
  let history = useHistory();
  function handleClick() {
    history.push("/EditProfile");
  }

  return (
    <div class="container">
      <Container>
        <MDBRow>
        <MDBCol>
        <Row>
       
          
            <Image
              src="https://www.w3schools.com/html/img_girl.jpg"
              style={{ width: "250", height: "300" }}
              rounded
            />
        </Row>
        </MDBCol>
        <MDBCol>
        <Row>
          <div>
            <p>
              <b>Name:</b>
            </p>
            <p>Ghassen</p>
          </div>
        </Row>
        <Row>
          <div>
            <p>
              <b>About:</b>
            </p>
            <p>In love with React Next</p>
          </div>
        </Row>
        </MDBCol>
        </MDBRow>
        <Row>
          
          <p>
            <b>Interested evnets:</b>
          </p>
          <div>
            {fakeEvents.map((event, index) => (
              <div style={{ padding: "25px" }}>
                <div className="list-group" >
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <MDBBox display="flex" alignSelf="center">
                        <p className="font-weight-normal">{event.Title}</p>
                      </MDBBox>
                      <small>{fakeEvents.Date}</small>
                    </div>

                    <p className="font-weight-light">{event.About}</p>
                    <MDBBox display="flex" alignSelf="center">
                      <p className="font-weight-normal">Status : /</p>
                    </MDBBox>
                    <MDBBox display="flex" alignSelf="start">
                      <p className="font-weight-normal">
                        Adress : via webinar or physical location.
                      </p>
                    </MDBBox>
                    <MDBBtn color="primary">Drop event</MDBBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row>
          <p>
            <b>posted jobs:</b>
          </p>
          <div>
            {fakeEvents.map((event, index) => (
              <div style={{ padding: "25px" }}>
                <div className="list-group" >
                  <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <MDBBox display="flex" alignSelf="center">
                        <p className="font-weight-normal">{event.Title}</p>
                      </MDBBox>
                      <small>{fakeEvents.Date}</small>
                    </div>

                    <p className="font-weight-light">{event.About}</p>
                    <MDBBox display="flex" alignSelf="center">
                      <p className="font-weight-normal"> Job type </p>
                    </MDBBox>
                    <MDBBox display="flex" alignSelf="start">
                      <p className="font-weight-normal">
                        Location
                      </p>
                    </MDBBox>
                    <MDBBox display="flex" alignSelf="start">
                      <p className="font-weight-normal">
                        Description
                      </p>
                    </MDBBox>
                    <MDBBtn color="primary">Drop offer</MDBBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>

  );
}