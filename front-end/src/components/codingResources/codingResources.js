import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Link } from "react-router-dom";

//////
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBRow,
  MDBView,
  MDBMask,
  MDBCardBody,
  MDBCard,
  MDBCol,
  MDBBtn,
  MDBBox,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  Table
} from "mdbreact";
/////
// import BlogDetails from './blogDetail'

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
    paddingTop: "56.25%", // 16:9
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

export default function CodingResources() {
  const classes = useStyles(dummy);

  const readArticle = (e) => {
    console.log(e);
  };

  return (
    <div className="search-results">
        <div className="list-group-item list-group-item-action flex-column align-items-start">
         <Table striped bordered hover>
       <thead>
         <tr>
           <th>Title</th>
           <th>Topic</th>
           <th>Level</th>
           <th>Format</th>
         </tr>
       </thead>
      {dummy.map((job, index) => (
        
      
       <tbody>
         <tr>
           <td>link goes here</td>
           <td>front end</td>
           <td>beginner</td>
           <td>web app</td>
         </tr>
       </tbody>
   

      ))}
        </Table>
        </div>
    </div>
  );
}

{
  /* <div style={{ padding: "50px" }}>
<div className="list-group" style={{ margin: "20px 100px" }}>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <MDBBox display="flex" alignSelf="center">
        <p className="font-weight-normal">0000</p>
      </MDBBox>
      <small>0000</small>
    </div>

    <p className="font-weight-light">0000</p>
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
</div> */
}
