import { React, useState } from "react";

import { useParams } from "react-router-dom";

import { MDBBox, MDBRow, MDBCol } from "mdbreact";

function JOBDetails() {
  let { id } = useParams();
  const [active, setActive] = useState(false);

  return (
    <div style={{ padding: "50px" }}>
      <div className="list-group" style={{ margin: "20px 100px" }}>
        <div className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <MDBRow>
              <MDBCol class="w-75 p-3">
                <p className="text-justify font-weight-normal">
                  Full Time / Singapore {id}
                  Full Stack Developer - Building next-gen products and
                  architecture Equinix is the world’s digital infrastructure
                  company, operating 210 data centers across the globe and
                  providing interconnections to all the key clouds and networks.
                  Businesses need one place to simplify and bring together
                  fragmented, complex infrastructure that spans private and
                  public cloud environments. Our global platform allows
                  customers to place infrastructure wherever they need it and
                  connect it to everything they need to succeed. At Equinix, we
                  help the world’s digital leaders scale with agility, speed the
                  launch of digital services, deliver world-class experiences,
                  and transform people’s lives. Our culture is based on
                  collaboration and the growth and development of our teams. We
                  hire hardworking people who thrive on solving challenging
                  problems and give them opportunities to hone new skills, and
                  try new approaches, as we grow our product portfolio with new
                  software and network architecture solutions. We embrace
                  diversity in thought and contribution and are committed to
                  providing an equitable work environment. that is foundational
                  to our core values as a company and is vital to our success As
                  a key member of the Product Engineering team, you will be
                  responsible for the end-to-end development lifecycle from the
                  requirement, architecture, design, implementation, testing,
                  deployment, and support with a focus on delivering solutions
                  adhering to business goals, technical requirements, and
                  engineering standards. Job Responsibilities: Hands-on Design,
                  Development, Deployment & Support of JavaScript based
                  platforms, frameworks, and applications Incorporates standards
                  and best practices, including performance, security,
                  scalability, and maintainability Interact with Business System
                  Analysts to design and deliver technical solutions to support
                  various business functions Create rich web user interfaces
                  using HTML, CSS, and JavaScript. Create server-side
                  functionality using asynchronous, highly scalable design
                  principles Provide thought leadership and lead innovation by
                  exploring, investigating, recommending, benchmarking and
                  implementing tools and frameworks. Work in a Globally
                  Distributed Development team environment to enable successful
                  delivery with a minimal supervision Advocate, document, and
                  follow best design and development practices It is you, if:
                  You are passionate, creative and self-driven You are curious
                  and collaborative, and a believer in the power of teams and
                  teamwork You are flexible and have a broad set of capabilities
                  to wear multiple hats You thrive in a dynamic and a fast-paced
                  environment You pursue speed and simplicity relentlessly You
                  are a natural leader in everything you do Experience: BS/MS
                  degree or equivalent with 6+ years in the field of Software
                  Engineering and Development An obsession with customer
                  experience, product fidelity, developer documentation, Web App
                  ecosystem, and exceptional developer experience. Minimum 4+
                  years of strong hands-on development experience with
                  JavaScript and related open source technologies Extensive
                  experience developing and running production application in
                  ReactJS is a must Minimum 3+ years of hands-on experience with
                  Frameworks like Nodejs, React.js, Vue.js, Angular.js, HTML 5,
                  CSS 3, etc. Exposure to the other frameworks and programming
                  languages like Java, Python, Golang is a plus Working
                  Knowledge on Reactive/Functional Programming Strong
                  understanding of design patterns and best practices in
                  JavaScript Good understanding of Identity concepts - SAML,
                  JWT, OAuth etc. Experience with web servers & application
                  servers such as Apache and Nginx Working experience with
                  Swagger (Open API Spec), OAuth, REST, JSON etc.,
                  Experience/knowledge on Data modeling and Nodejs integration
                  with NO-SQL technologies like Redis, Cassandra etc. is a plus
                  Solid understanding of how to use tools like Git, Jira, and
                  Jenkins Solid understanding of JS unit testing frameworks
                  Proven ability to quickly grasp the implications of evolving
                  industry trends & technology intersects Exceptional
                  communication, organization, and presentation skills
                  Experience working within Agile or Scaled Agile Framework is
                  required Interested? Please apply by clicking the
                  'Application' form. Click here for the application form!
                </p>
              </MDBCol>
              <MDBCol>
                <MDBBox display="flex" alignSelf="center">
                  <p class="text-sm-start">Full Stack Developer</p>
                </MDBBox>
                <MDBBox display="flex" alignSelf="start">
                  <p className="font-weight-normal">Full Time / Singapore</p>
                </MDBBox>
                <MDBBox display="flex" alignSelf="start">
                  <p className="font-weight-normal">Company X</p>
                </MDBBox>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JOBDetails;
