import React, { Component } from 'react'
import ProfileInfo from './Profile/ProfileInfo'


export class Profile extends Component {
    render() {
        return (
            <div>
                <p>Profile</p>
                <div className="temp">
                    <ProfileInfo />
                </div>
            </div>
        )
    }
}

export default Profile
