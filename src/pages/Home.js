import React, { Component } from "react";
import Platform from "../home/Platform";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    return (
      <div className="platform-container">
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Platform />
      </div>
    );
  }
}

export default Home;
