import React from 'react';
import Logo from '../logo.svg'
import Random from '../random.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <nav>
        <a className="header-cta btn btn-tertiary" href="/">
          <button>
            random chat
            <img className="btn-icon btn-icon-tertiary" src={ Random } />
          </button>
        </a>
        <a className="header-title" href="/">
          <img className="header-logo" src={ Logo } />
          paperClip
        </a>
        <a className="header-profile btn btn-primary" href="/">profile</a>
      </nav>
    );
}

export default Header;
