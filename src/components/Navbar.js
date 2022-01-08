import React, { Component } from 'react'
import '../App.css'
export class Navbar extends Component {
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div>
         <nav className="transparent" style={{marginTop:"20px"}}>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo" style={{fontWeight:"bolder"}}>EscrowBear</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down" style={{fontWeight:"bolder"}}>
        <li><a href="/">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="/signIn">Login</a></li>
        <li><a href="/signUp" className="btn waves-effect white black-text">Sign Up</a></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav black" id="mobile-demo" style={{fontWeight:"bolder"}}>
    <li><a href="/" className="white-text" style={{marginTop:"25px"}}>Home</a></li>
    <li><a href="" className="white-text">About Us</a></li>
    <li><a href="/signIn" className="white-text">Login</a></li>
    <li><a href="/signUp" className="btn waves-effect white black-text">Sign Up</a></li>
  </ul>
      </div>
    )
  }
}

export default Navbar
