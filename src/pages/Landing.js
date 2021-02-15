import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Landing = () => {
  return (
    <div className="landing-container">
      <Link className="landing-title" to="/landing">
        <img className="landing-logo" src={Logo} />
        paperClip
      </Link>
      <h3>Clip your destiny away</h3>
      <div className="landing-profile">
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;
