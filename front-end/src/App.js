         
import EditProfile from "./components/profile/EditProfile"
import Viewprofile from "./components/profile/ViewProfile";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Redirect, Link } from "react-router-dom";

//IMPORTING ALL THE COMPONENTS
import Home from "./components/pages/home";
import Donate from "./components/pages/donate";
import About from "./components/pages/about";
import SignIn from "./components/pages/signin";
import SignUp from "./components/pages/signup";
import NavigationBar from "./components/pages/navigation";
import Logout from "./components/pages/logout";
import Events from "./components/events/events";
import Blogs from "./components/blogs/blogs";
import EditProfile from "./components/profile/editProfile";
import Viewprofile from "./components/profile/viewProfile";

import BlogDetails from "./components/blogs/blogDetail";
import EventDetails from "./components/events/eventDetail";

import "./App.css";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        She Codes Africa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/logout" component={Logout} />

            <Route path="/donate" component={Donate} />
            <Route exact path="/viewprofile" component={Viewprofile} />
            <Route exact path="/editProfile" component={EditProfile} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/:id" children={<EventDetails />} />

            <Route exact path="/blogs" component={Blogs} />
            <Route path="/blogs/:id" children={<BlogDetails />} />
          </Switch>

          <footer>
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
        </div>
      </Router>
    );
  }
}

export default App;
