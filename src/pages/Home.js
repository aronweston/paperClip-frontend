import React, { Component } from "react";
import Platform from "../home/Platform";

class Home extends Component {

  constructor(props) {
    super(props)
    console.log(props);
  }

  render() {
    if(this.props.loggedInStatus === "NOT_LOGGED_IN") {
      window.location.href = "/login";
    } else {
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
}

export default Home;
