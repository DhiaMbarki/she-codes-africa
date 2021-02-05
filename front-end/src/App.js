import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home'
import Donate from './components/donate'
import About from './components/about'
import SignIn from './components/signin'
import SignUp from './components/signup'
import NavigationBar from './components/navigation'
import Logout from './components/logout'

import Blogs from './components/blogs'
import UpcomingEvents from './components/upcomingEvents'


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
 return (
     <Router>
       <div>
         <NavigationBar/>

         <Switch>

           <Route exact path = '/' component = {Home} />
           <Route path = '/donate' component = {Donate} />
           <Route path = '/about'  component = {About} />
           <Route path = '/signIn' component = {SignIn} />
           <Route path = '/signUp' component = {SignUp} />
           <Route path = '/logout' component = {Logout} />

           <Route path = '/blogs' component = {Blogs} />
           <Route path = '/upcomingEvents' component = {UpcomingEvents} />

         </Switch>
       </div>
     </Router>
 );
}
}

export default App;
