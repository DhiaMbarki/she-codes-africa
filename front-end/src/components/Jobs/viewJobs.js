import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Link } from "react-router-dom";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBox
} from "mdbreact";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

var dummy = [
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "1",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "2",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "3",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "4",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "5",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "6",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "7",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "8",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "9",
  },
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "Image",
    author: "10",
  },
];

export default function ViewJobs() {
 

  const readArticle = (e) => {
    console.log(e);
  };

  return (
    <div className="search-results">
      {dummy.map((job, index) => (
        <div className="list-group" style={{ margin: "20px 100px" }}>
          <div className="list-group-item list-group-item-action flex-column align-items-start">
            <MDBRow>
              <MDBCol class="w-25 p-3">
                <img
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2015/08/cards.jpg"
                  className="rounded float-left"
                  alt="aligment"
                  style={{ height: "150px", width: "150px" }}
                />
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
                <Link to={`/viewJobs/${index}`}>
                <MDBBtn color="primary" onClick = {()=>readArticle(index)}>More details</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
          </div>
        </div>
      ))}
    </div>
  );
}
