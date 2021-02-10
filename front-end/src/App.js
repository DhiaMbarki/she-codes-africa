import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
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

import React, { FC, useEffect } from 'react';
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'

import Header from './components/sections/Header';
import ForgotPassword from './components/pages/ForgotPassword';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './components/auth/privateRoute';
import PublicRoute from './components/auth/PublickRoute';
import Loader from './components/UI/Loader';
import firebase from './firebase/config';
import { getUserById, setLoading, setNeedVerification } from './store/actions/authActions';
import { RootState } from './store';


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




// class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//  return (
//      <Router>
//        <div>
//          <NavigationBar/>
//          <Switch>
//            <Route exact path = '/' component = {Home} />
//            <Route path = '/donate' component = {Donate} />
//            <Route path = '/about'  component = {About} />
//            <Route path = '/SignIn' component = {SignIn} />
//            <Route path = '/SignUp' component = {SignUp} />
//            <Route path = '/logout' component = {Logout} />
//            <Route exact path="/events" component={Events} />
//          </Switch>
//        </div>
//      </Router>
//  );
// }
// }

// export default App;

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);
  
  // Check if user exists


  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setLoading(true));
        await dispatch(getUserById(user.uid));
        if(!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if(loading) {
    return <Loader />;
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
