import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import{Provider} from 'react-redux';

//IMPORTING ALL THE COMPONENTS 
import Events from './components/events/events';

import './App.css';

function App() {
  return (
    <Provider store ={store}>
    <BrowserRouter>
    <div className="App">
        
    <Switch>
    {/* <Route exact path="/" component={Homepage} />
    <Route exact path="/Homepage" component={Homepage} /> */}
    <Route exact path="/Events" component={Events} />
     
    </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
