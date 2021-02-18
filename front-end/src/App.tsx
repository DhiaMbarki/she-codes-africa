
import { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
//IMPORTING ALL THE COMPONENTS
import Home from "./components/pages/home";
import Donate from "./components/pages/donate";
import About from "./components/pages/about";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Events from "./components/events/events";
import Blogs from "./components/blogs/Blogs";
import EditProfile from "./components/profile/EditProfile";
import Viewprofile from "./components/profile/ViewProfile";
import BlogDetails from "./components/blogs/blogDetail";
import EventDetails from "./components/events/eventDetail";
import NavigationBar from "./components/pages/navigation";
import ForgotPassword from "./components/pages/ForgotPassword";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/auth/privateRoute";
import PublicRoute from "./components/auth/PublickRoute";
import Loader from "./components/UI/Loader";
import NavHome from "./components/pages/NavHome";
import HeaderHome from "./components/pages/HeaderHome";
import Section from "./components/pages/section";
import Slideshow from "./components/pages/Slideshow";
import addcodingresource  from "./components/codingResources/addCodingressource"
import AddBlogs from "./components/blogs/AddBlogs";
import postevent from  "./components/events/addEvents"

import ViewJobs from "./components/Jobs/viewJobs";
import JOBDetails from "./components/Jobs/jobDetail";
import CodingResources from "./components/codingResources/codingResources";
import PostJobs from "../src/components/Jobs/postJobs";
import EditCompanyProfile from './components/companyProfile/EditCompanyProfile'
import ViewCompanyProfile from './components/companyProfile/ViewCompanyProfile'
import CreateRoom from "./components/Webinar/CreateRoom";
import Room from "./components/Webinar/Room";

import firebase from "./firebase/config";
import {
  getUserById,
  setLoading,
  setNeedVerification,
} from "./redux/actions/authActions";
import { RootState } from "./redux/index";

import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  // Check if user exists

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setLoading(true));
        dispatch(getUserById(user.uid));
        if (!user.emailVerified) {
          dispatch(setNeedVerification());
        }
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <NavHome></NavHome>
                <HeaderHome></HeaderHome>
                <Section></Section>
                <Home></Home>
                <Slideshow></Slideshow>
              </>
            )}
          />


          <Route exact path="/addBlogs" component={AddBlogs} />

          <Route path="/about" component={About} />
          <Route path="/donate" component={Donate} />
          <PublicRoute path="/signup" component={SignUp} exact />
          <PublicRoute path="/signin" component={SignIn} exact />
          <PublicRoute
            path="/forgot-password"
            component={ForgotPassword}
            exact
          />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <Route exact path="/viewprofile" component={Viewprofile} />
          <Route exact path="/editProfile" component={EditProfile} />
          <Route exact path="/viewJobs" component={ViewJobs} />
          <Route path="/viewJobs/:id" children={<JOBDetails />} />
          <Route exact path="/addcodingResources" component={addcodingresource} />
          <Route exact path="/codingResources" component={CodingResources } />
          <Route exact path="/addevents" component={postevent} />
          <Route path="/postJobs" component={PostJobs} />
          <Route path="/editCompanyProfile" component={EditCompanyProfile} />
          <Route path="/viewCompanyProfile" component={ViewCompanyProfile} />
          <Route exact path="/events" component={Events} />
          <Route path="/events/:id" children={<EventDetails />} />
          <Route exact path="/blogs" component={Blogs} />
          <Route path="/blogs/:id" children={<BlogDetails />} />

        <Route path="/webinar" exact component={CreateRoom} />
        <Route path="/webinar/room/:roomID" component={Room} />
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
        </footer>
      </div>
    </Router>
  );
};

export default App;
