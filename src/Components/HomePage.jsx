import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HomePage extends Component {
  render() {
    return (
        <div>
        <div id="slide1">
            <div className="content">
                <Link to="/transfer"><button className="landing-button">Transfer Token</button></Link>
                <Link to="/transfer"><button className="landing-button">Blacklist</button></Link>
            </div>
        </div>
        <div id="slide2">
        </div>
        </div>
    )
  }
}
export default HomePage;
