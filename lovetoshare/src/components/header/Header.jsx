import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">LovetoShare</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </div>
    )
  }
}
export default Header;