import React, { Component } from "react";
import Platform from "../Home/Platform";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    return (
      <>
      <h2>Status: {this.props.loggedInStatus}</h2>
      <div className="platform-container">
        <Platform />
      </div>
      </>
    );
  }
}

export default Home;
