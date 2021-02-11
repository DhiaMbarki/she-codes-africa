import { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
//IMPORTING ALL THE COMPONENTS
import Donate from "./components/pages/donate";
import About from "./components/pages/about";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Events from "./components/events/events";
import Blogs from "./components/blogs/Blogs";
import EditProfile from "./components/profile/editProfile";
import Viewprofile from "./components/profile/viewProfile";
// import BlogDetails from "./components/blogs/blogDetail";
import EventDetails from "./components/events/eventDetail";

import NavigationBar from "./components/pages/navigation";
import ForgotPassword from "./components/pages/ForgotPassword";
import Dashboard from "./components/pages/Dashboard";
import PrivateRoute from "./components/auth/privateRoute";
import PublicRoute from "./components/auth/PublickRoute";
import Loader from "./components/UI/Loader";

import ViewJobs from "./components/Jobs/viewJobs";
import JOBDetails from "./components/Jobs/jobDetail";
import CodingResources from "./components/codingResources/codingResources";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/pages/Home";
import AddBlogs from "./components/blogs/AddBlogs";
import Blog from "./components/blogs/Blog";
import Navbar from "./components/elemnts/Navbar";

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
        await dispatch(getUserById(user.uid));
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
    // <Provider store={store}>

    <Router>
      <div>
        <NavigationBar />
        <Navbar />

        <Switch>
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

         




            <Route exact path="/" component={Home} />
            <Route exact path="/addPost" component={AddBlogs} />
            <Route exact path="/post/:id" component={Blog} />
         




          <Route exact path="/viewJobs" component={ViewJobs} />
          <Route path="/viewJobs/:id" children={<JOBDetails />} />

          <Route exact path="/codingResources" component={CodingResources} />

          <Route exact path="/events" component={Events} />
          <Route path="/events/:id" children={<EventDetails />} />
          <Route exact path="/blogs" component={Blogs} />
          {/* <Route path="/blogs/:id" children={<BlogDetails />} /> */}
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
    // </Provider>
  );
};

export default App;
