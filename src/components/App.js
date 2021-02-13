import NavBar from "./NavBar";

import Home from "../pages/Home";
import Landing from "../pages/Landing";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../app.css";

//set up a pages directory in src
// create pages directory << Landing.js << Login.js << SignUp.js << Home.js
// set up browser router
// set up switch component with nested routes
// in the routes, define the component ={component}
// path="/"

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={LogIn} path="/login" />
          
          <Route component={SignUp} path="/signup" />
          <div class="main-container">
            <Route component={Home} path="/home" />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
