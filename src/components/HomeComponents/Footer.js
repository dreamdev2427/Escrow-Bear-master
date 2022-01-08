import React, { Component } from 'react'
import "../../App.css"
import pol from '../../images/pol.png'
import pol1 from '../../images/pol1.png'
export class Footer extends Component {
  componentDidMount(){
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems,{});
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 l12 footerColumn">
          <img src={pol} alt="" className="footerPoly responsive-img"/>
          <div className="row" style={{marginTop:"75px"}}>
            <div className="col s12 l4 ">
              <h4 className="white-text" style={{fontWeight:"bolder"}}>EscrowBear</h4>
              <div style={{marginLeft:"50px"}}>
                <p className="white-text">Escrowbear Help you provide the service to<br/>
                  sell or buy the crypto currencies at ease.
                  <br/><br/>
                We adopt the best option to help protect 
                your privacy and security using our
                anti cheat systems and qualified staf</p>
              </div>
            </div>
            <div className="col s12 l4 ">
              <h5 className="white-text"  style={{fontWeight:"bolder"}}>QUICK LINKS</h5>
              <ul className="white-text" style={{fontSize:"19px"}}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col s12 l4">
            <h5 className="white-text"  style={{fontWeight:"bolder"}}>Social Links</h5>
            <ul style={{display:"flex",fontSize:"25px"}}>
              <li><i className="fab fa-facebook white-text"></i></li>
              <li style={{marginLeft:"25px"}}><i className="fab fa-instagram white-text"></i></li>
              <li style={{marginLeft:"25px"}}><i className="fab fa-twitch white-text"></i></li>
            </ul>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l12 right-align ">
            <i className="far fa-comment-alt white-text footerMessageIcon tooltipped" data-position="left" data-tooltip="How Can We Help You Today ?" style={{padding:"25px",fontSize:"30px",marginRight:"50px"}}></i>
            </div>
          </div>
            <div className="row" style={{marginTop:"10px"}}>
              <div className="col s6 l3">
              <p className="white-text" style={{marginLeft:"10px",marginTop:"120px",fontWeight:"lighter"}}>All rights reserved | Copyright EscrowBear.com</p>
              </div>
              <div className="col s6 l6">
              <p className="white-text right-align" style={{marginTop:"120px",fontWeight:"lighter"}}>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions</p>
              </div>
            </div>
           
        </div>
      </div>
    )
  }
}

export default Footer
