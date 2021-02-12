import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from "react-router-dom"

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
      <h1>Welcome to paperClip</h1>
    </div>
  );
}

export default App;
