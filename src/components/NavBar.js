import React, { Component } from "react";
import Logo from "../assets/logo.svg";
// import Random from '../assets/random.svg'
import axios from "axios";
// import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.SERVER_URL = "http://localhost:3000/logout";
  }

  handleLogoutClick() {
    axios
      .delete(this.SERVER_URL, { withCredentials: true })
      .then(this.props.handleLogout())
      .catch((error) => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <nav>
        <a className="header-cta btn btn-tertiary" href="/">
          <button>
            random chat
            <svg
              className="btn-icon btn-icon-tertiary"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.4209 8.03137L9.93333 10.73L9.24881 9.50574C8.90652 8.89132 8.40636 8.37946 7.80002 8.02307C7.19369 7.66667 6.50317 7.47867 5.79985 7.47849H2.31139C1.96226 7.47849 1.62743 7.33979 1.38056 7.09292C1.13369 6.84605 0.994995 6.51122 0.994995 6.16209C0.994995 5.81296 1.13369 5.47813 1.38056 5.23126C1.62743 4.98438 1.96226 4.84569 2.31139 4.84569H5.79985C6.93161 4.84862 8.0435 5.14334 9.02813 5.70137C10.0128 6.25941 10.8369 7.06191 11.4209 8.03137ZM25.9012 17.5094C25.8386 17.3478 25.7446 17.2002 25.6248 17.075L21.6756 13.1258C21.4277 12.8779 21.0915 12.7387 20.741 12.7387C20.3904 12.7387 20.0542 12.8779 19.8063 13.1258C19.5584 13.3737 19.4192 13.7099 19.4192 14.0605C19.4192 14.411 19.5584 14.7472 19.8063 14.9951L21.5176 16.6933H18.5689C17.8656 16.6931 17.1751 16.5051 16.5687 16.1487C15.9624 15.7923 15.4622 15.2804 15.1199 14.666L14.4486 13.4418L12.9479 16.1404C13.5319 17.1098 14.356 17.9123 15.3406 18.4704C16.3252 19.0284 17.4371 19.3231 18.5689 19.3261H21.5176L19.8063 21.0242C19.6829 21.1466 19.585 21.2922 19.5182 21.4526C19.4513 21.613 19.4169 21.7851 19.4169 21.9589C19.4169 22.1326 19.4513 22.3047 19.5182 22.4651C19.585 22.6255 19.6829 22.7711 19.8063 22.8935C19.9287 23.0169 20.0743 23.1148 20.2347 23.1816C20.3951 23.2485 20.5672 23.2829 20.741 23.2829C20.9147 23.2829 21.0868 23.2485 21.2472 23.1816C21.4076 23.1148 21.5532 23.0169 21.6756 22.8935L25.6248 18.9443C25.7446 18.8191 25.8386 18.6715 25.9012 18.5099C26.0329 18.1894 26.0329 17.8299 25.9012 17.5094ZM25.9012 6.66232C26.0329 6.34183 26.0329 5.98235 25.9012 5.66186C25.8386 5.50027 25.7446 5.35264 25.6248 5.22745L21.6756 1.27825C21.5529 1.15552 21.4071 1.05815 21.2468 0.991728C21.0864 0.925303 20.9145 0.891113 20.741 0.891113C20.3904 0.891113 20.0542 1.03037 19.8063 1.27825C19.5584 1.52614 19.4192 1.86234 19.4192 2.2129C19.4192 2.56346 19.5584 2.89966 19.8063 3.14754L21.5176 4.84569H18.5689C17.4 4.85032 16.2534 5.16617 15.247 5.76076C14.2406 6.35535 13.4107 7.20723 12.8426 8.22883L9.24881 14.666C8.90652 15.2804 8.40636 15.7923 7.80002 16.1487C7.19369 16.5051 6.50317 16.6931 5.79985 16.6933H2.31139C1.96226 16.6933 1.62743 16.832 1.38056 17.0788C1.13369 17.3257 0.994995 17.6605 0.994995 18.0097C0.994995 18.3588 1.13369 18.6936 1.38056 18.9405C1.62743 19.1874 1.96226 19.3261 2.31139 19.3261H5.79985C6.96876 19.3214 8.11536 19.0056 9.12177 18.411C10.1282 17.8164 10.9581 16.9645 11.5262 15.9429L15.0936 9.50574C15.4381 8.8874 15.9424 8.37301 16.5537 8.01637C17.1651 7.65973 17.8611 7.47396 18.5689 7.47849H21.5176L19.8063 9.17664C19.6829 9.29902 19.585 9.44461 19.5182 9.60503C19.4513 9.76544 19.4169 9.9375 19.4169 10.1113C19.4169 10.2851 19.4513 10.4571 19.5182 10.6175C19.585 10.778 19.6829 10.9235 19.8063 11.0459C19.9287 11.1693 20.0743 11.2672 20.2347 11.3341C20.3951 11.4009 20.5672 11.4353 20.741 11.4353C20.9147 11.4353 21.0868 11.4009 21.2472 11.3341C21.4076 11.2672 21.5532 11.1693 21.6756 11.0459L25.6248 7.09673C25.7446 6.97154 25.8386 6.82391 25.9012 6.66232Z" />
            </svg>
          </button>
        </a>
        <a className="header-title" href="/">
          <img className="header-logo" src={Logo} />
          paperClip
        </a>
        <div className="header-profile">
          <a className="btn btn-primary" href="/login">
            {this.props.login === this.props.login
              ? `Hi,${this.props.user.username}`
              : "login"}
          </a>
          <a
            className="btn btn-primary"
            onClick={() => this.handleLogoutClick()}
          >
            Logout
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
