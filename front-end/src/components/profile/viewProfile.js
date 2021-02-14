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
// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";

export default function ViewProfile() {
  let history = useHistory();
  function handleClick() {
    history.push("/EditProfile");
  }

  return (
    <div class="container">
      <Container>
        <Row>
          <div class="container">
            <Image
              src="https://www.w3schools.com/html/img_girl.jpg"
              style={{ width: "250", height: "300" }}
              rounded
            />
          </div>
        </Row>
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
      </Container>
    </div>

    // <div class="container">
    //     <div class="colum1">
    //         <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="250" height="300"></img><br></br>
    //         <Text id="lable" fontSize="3xl" as="samp" color="black" as="cite" >Name</Text><br></br>
    //         <Text id="name" fontSize="2xl" as="samp" color="black" as="samp" >Ghassen</Text><br></br>
    //     </div>
    //     <div class="aboutme">
    //         <Text fontSize="3xl" color="black" as="cite" >About me</Text><br></br>
    //         <Text fontSize="lg" as="em"> In love with React  Next</Text>
    //         <div class="link">
    //             <a href="https://www.w3schools.com">
    //                 <img alt="W3Schools" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="50" height="50"></img></a>
    //             <a href="https://www.w3schools.com">
    //                 <img alt="W3Schools" src="data:image/png;base64,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" width="50" height="50"></img></a>
    //             <a href="https://www.w3schools.com">
    //                 <img alt="W3Schools" src="https://image.flaticon.com/icons/png/512/8/8800.png" width="50" height="50"></img></a>
    //         </div><br></br><br></br><br></br>
    //   <hr /><br></br>
    //         <Button colorScheme="teal" size="md" onClick={handleClick}>Edit profile</Button>
    //         <Button id="clearevent" colorScheme="teal" size="md">Clear event</Button>
    //     </div>

    // </div>
  );
}
