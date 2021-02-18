import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import $ from "jquery";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Table } from "mdbreact";
import { connect } from "react-redux";
import addressourceaction from "../../redux/actions/addressourcesaction";


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

function CodingResources(props) {
  var rcrs = props.newstate.resrcs.article;
  useEffect(() => {
    $.get("http://localhost:3000/fetechall").then((response) => {
      console.log("Ressources is fetched  with succes");
      if (props.newstate.resrcs.article.length !== 0) {
        props.newstate.resrcs.article.length = [];
        props.addnewressource(response.Allressources);
      } else {
        props.addnewressource(response.Allressources);
      }
    });
  }, []);

  return (
    <div className="search-results">
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <b>Title</b>
              </th>
              <th>
                <b>Topic</b>
              </th>
              <th>
                <b>Level</b>
              </th>
              <th>
                <b>Format</b>
              </th>
            </tr>
          </thead>
          {rcrs.map((rcr, index) => (
            <tbody key={index}>
              <tr>
                <td>
                  {" "}
                  <Nav.Link href={rcr.Link}>
                    <b>{rcr.Title}</b>
                  </Nav.Link>
                </td>
                <td>{rcr.Topic}</td>
                <td>{rcr.Level}</td>
                <td>{rcr.Format}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { newstate: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addnewressource: (obj) => dispatch(addressourceaction(obj)),
  };
};
const Container1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodingResources);
export default Container1;
