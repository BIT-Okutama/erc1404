import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
        <header id="header" className={"" + (window.location.pathname == "/" ? '' : 'solidHeader')}>
        <div className="content">
          <div id="logo"><a href="/">JP Ether</a></div>
          <nav id="nav">
          </nav>

        </div>
      </header>
    )
  }
}
export default NavBar;