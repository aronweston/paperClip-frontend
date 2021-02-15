import React, { Component } from 'react'

export class AuthController extends Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        if(this.props.login) {
        return (
            <div>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        )
        } else {
        return (
            <div>
                <LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <a className="btn btn-primary" onClick={() => this.handleLogoutClick()}>logout</a>
            </div>
        )        
        }
    }
}

export default AuthController
