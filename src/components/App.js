import NavBar from "./NavBar";
import Home from "../pages/Home";
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
      <BrowserRouter>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={LogIn} path="/login" />
          <Route component={SignUp} path="/signup" />
          <Route component={Home} path="/home" />
        </Switch>
      </BrowserRouter>
      <NavBar />

      <div className="main-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
