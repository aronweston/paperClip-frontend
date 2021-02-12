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
  );
}

export default App;
