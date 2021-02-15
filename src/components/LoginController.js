import React, {Component} from 'react';
import axios from 'axios'

export class LoginController extends Component {
    constructor(props) {
        super(props)
        this.SERVER_URL = "http://localhost:3000/logout";
    }

    handleLogoutClick = () => {
        axios.delete(this.SERVER_URL, { withCredentials: true })
            .then(this.props.handleLogout)
        .catch((error) => {
            console.log("logout error", error);
        });
    }

    render() {

       if (this.props && this.props.login === undefined) {
            return null
       } else {
        if (this.props.login === "LOGGED_IN") {
        //only show the login profile
        return (
            <div>
                <a className="btn btn-primary">{this.props.login === this.props.login ? `Hi,${this.props.user.username}` : "login"}</a>
                <button className="btn btn-primary" onClick={() => this.handleLogoutClick()}>Logout</button>
            </div>
        )
        } else {
            //login button
            return (
               <a className="btn btn-primary" href="/login">Login</a>
            )
        }
    }
    }
}

export default LoginController


