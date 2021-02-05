import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//IMPORTING ALL THE COMPONENTS
import Home from './components/pages/home';
import Donate from './components/pages/donate'
import About from './components/pages/about'
import SignIn from './components/pages/signin'
import SignUp from './components/pages/signup'
import NavigationBar from './components/pages/navigation'
import Logout from './components/pages/logout'
import Events from "./components/events/events";

import "./App.css";

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
           <Route exact path="/events" component={Events} />
         </Switch>
       </div>
     </Router>
 );
}
}

export default App;
