import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';           
import EditProfile from "./components/profile/EditProfile"
import Viewprofile from "./components/profile/ViewProfile";
function App() {
  return (
<BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/Viewprofile" component={Viewprofile} />
            <Route exact path="/EditProfile" component={EditProfile} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
