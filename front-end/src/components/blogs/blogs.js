import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Link } from "react-router-dom";

import { useSelector } from 'react-redux';


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


export default function Blogs() {

  const blogs = useSelector((state) => {return state.blogs})
  console.log(blogs)

  const classes = useStyles(blogs);

  const readArticle = (e) => {
    console.log(e);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}></div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {blogs.map((card) => (
              <Grid item key={card.author}>
                <MDBCard className="my-5 px-5 pb-5">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView
                          hover
                          className="rounded z-depth-1-half mb-lg-0 mb-4"
                        >
                          <img className="img-fluid" src={card.img} alt="" />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>{card.title}</strong>
                        </h3>
                        <p className="dark-grey-text">
                        {card.text.slice(0,150)}
                        </p>
                        <p>
                          by{" "}
                          <a href={card.link} className="font-weight-bold">
                          {card.author}
                          </a>
                          , {card.postedAt}
                        </p>
                        <Link to={`/blogs/${card.author}`}>
                          <MDBBtn color="primary" size="md" onClick={()=>readArticle(card.author)}>
                            Read More
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

