import React, { Component } from "react";
import Platform from "../home/Platform";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    return (
      <>
      <h1>Status: {this.props.loggedInStatus}</h1>
      <div className="platform-container">
        <Platform />
      </div>
      </>
    );
  }
}

export default Home;
