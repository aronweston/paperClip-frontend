import React from "react";
import Logo from "../assets/logo.svg";
import LoginController from "./LoginController";
import DarkLightMode from "./DarkLightMode";

const NavBar = (props) => {
  return (
    <nav>
      <div className="header-cta">
        <DarkLightMode />
      </div>

      {props.showFull ? (
        <div>
          <a className="header-title" href="/">
            <img className="header-logo" src={Logo} />
            paperClip
          </a>
          <div className="header-profile">
            <LoginController
              login={props.login}
              user={props.user}
              handleLogout={props.handleLogout}
            />
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
