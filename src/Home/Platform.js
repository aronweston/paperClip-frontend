import React, { Component } from 'react';
import { USER, LOGGED_IN } from '../auth/serverData';
import MainPanel from './MainPanel';
import SidePanel from './SidePanel';
import axios from 'axios';
import _ from 'underscore';

class Platform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clips: [],
      user: {},
    };
    this.fetchClips = this.fetchClips.bind(this);
  }

  fetchClips() {
    axios.get(`${USER}/${this.props.user.id}/clips`).then((response) => {
      this.setState({
        clips: [...response.data],
      });
    });
  }

  componentDidMount() {
    setTimeout(() => {
      if (_(this.props.user).isEmpty({})) {
        this.props.history.push('/landing');
        console.log('empty');
      } else {
        this.fetchClips();
      }
    }, 4000);
  }

  render() {
    return (
      <>
        <SidePanel
          login={this.props.login}
          user={this.props.user}
          handleLogout={this.props.handleLogout}
          fetchClips={this.fetchClips}
          clips={this.state.clips}
        />
        <MainPanel
          user={this.props.user}
          handleLogout={this.props.handleLogout}
          fetchClips={this.fetchClips}
        />
      </>
    );
  }
}
export default Platform;
