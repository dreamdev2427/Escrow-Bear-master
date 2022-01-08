import React, { Component } from 'react'
import '../../App.css'
import Navbar from '../Navbar';
export class Section1 extends Component {
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
     <div className="row">
       <div className="col s12 l12 section1Column">
        <Navbar/>
        <div className="center-align">
          <h4 className="white-text " style={{fontWeight:"bolder",marginTop:"150px"}}>The Leading Bitcoin Escrow and <br/>Cryptocurrency Escrow System</h4>
            <br/>    
          <h6 className="para flow-text" style={{fontWeight:"bolder"}}>Escaroo is the Worlds most secure Cross Chain DeFi platform allowing users to deploy<br/>
            crypto-based escrow smart contracts with no coding required.</h6>
            <br/>
            <a href="" className="btn btn-large waves-effect deep-purple darken-4 white-text" style={{padding:"0px,13px",fontWeight:"bolder"}}>Get Started</a>
        </div>
        <div style={{marginTop:"150px"}}></div>
       </div>
     </div>
    )
  }
}

export default Section1
