<<<<<<< HEAD:src/App.js
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to paperClip</h1>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={LogIn} path="/login" />
          <Route component={SignUp} path="/signup" />
          <Route component={Home} path="/home/:id" />
        </Switch>
      </div>
    </BrowserRouter>
=======
import NavBar from './NavBar'
import Home from '../pages/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import '../app.css'

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

      <div className="main-container">
        <Home />
      </div>

    </div>
>>>>>>> cfd6901a0b285142909af1e5abbe4d501cb1a350:src/components/App.js
  );
}

export default App;
