import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchEvent } from "../../redux/actions/eventAction";
import { useEffect , useState } from "react";
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

 function Events(props) {

    const  Events= props.newstate.events.fetchedevents
   useEffect(() => {
     if (props.newstate.events.fetchedevents.length !== 0) {
       props.newstate.events.fetchedevents = [];
       props.fetchEvent();
     }else {
        (props.fetchEvent())
      }
    
  }, []);

  const events = useSelector((state) => {return state.events.events})
  const classes = useStyles(events);
  const readArticle = (index) => {
    localStorage.setItem('index',index+1)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        
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
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {Events.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.Image}//"https://www.avarievents.com/wp-content/uploads/2019/07/1-3-1080x450.jpg"
                    title= ""//{//card[0]};
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.Title}
                    </Typography>
                    <Typography>{card.About}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/events/${index+1}`}>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => readArticle(index)}
                      >
                        Click for more details
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return { newstate: state };
};
Events.propTypes = {
  fetchEvent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps,  {fetchEvent})(Events);


