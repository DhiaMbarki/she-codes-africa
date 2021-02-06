import { BrowserRouter, Switch } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


//IMPORTING ALL THE COMPONENTS
import Home from './components/pages/home';
import Donate from './components/pages/donate'
import About from './components/pages/about'

import NavigationBar from './components/pages/navigation'
import logout from './components/pages/logout'
import Events from "./components/events/events";

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

  return (
    
    <BrowserRouter>
    <NavigationBar/>
    <Header/>
      <Switch>

        <PublicRoute path="/signup" component={SignUp} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
