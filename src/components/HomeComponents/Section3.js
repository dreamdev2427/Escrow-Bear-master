import React, { Component } from 'react'
import '../../App.css'
export class Section3 extends Component {
  render() {
    return (
     <div className="row">
       <div className="col s12 l3 section3Column">
        <h5 className="left-align white-text" style={{fontWeight:"bolder",marginTop:"75px"}}>Contact Information</h5>
        <p className="white-text" style={{fontWeight:"100"}}>Fill up the form and our <br/>team will get back to you soon</p>
          <div className="left-align" style={{marginTop:"45px"}}>
          <span style={{fontSize:"17px"}}><i className="fas fa-phone-alt section3Icon"></i><span className="white-text" style={{marginLeft:"20px"}}>+91-545-569874</span></span>
          </div>
          <div className="left-align" style={{marginTop:"40px"}}>
          <span className="left-align"><i className="fas fa-envelope section3Icon"></i><span className="white-text" style={{marginLeft:"20px"}}>Emil@gmail.com</span></span>
          </div>
          <div className="left-align" style={{marginTop:"40px"}}>
          <span className="left-align"><i className="fas fa-location-arrow section3Icon"></i><span className="white-text" style={{marginLeft:"20px"}}>This street,Building No#43 <br/><span style={{marginLeft:"35px"}}>New Delhi,India</span></span></span>
          </div>
          <div style={{marginTop:"225px"}}>
            <ul style={{display:"flex",fontSize:"25px"}}>
              <li><i className="fab fa-facebook section3Icon"></i></li>
              <li style={{marginLeft:"15px"}}><i className="fab fa-instagram section3Icon"></i></li>
              <li style={{marginLeft:"15px"}}><i className="fab fa-twitter section3Icon"></i></li>
            </ul>
          </div>
       </div>
       <div className="col s12 l9" style={{marginTop:"65px"}}>
          <form  className="col s12">
          <div className="row">
        <div className="input-field col s6">
          <input  id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row" style={{marginTop:"20px"}}>
        <div className="input-field col s6">
          <input  id="email" type="text" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s6">
          <input id="phone" type="text" className="validate"/>
          <label htmlFor="phone">Phone</label>
        </div>
      </div>

      <div className="row" style={{marginTop:"20px"}}>
        <div className="col s6">
        <p className="grey-text">Please choose your account type:</p>
        <div style={{display:"flex"}}>
        <p>
        <label>
        <input className="with-gap" name="group3" type="radio"/>
        <span>Seller</span>
        </label>
         </p>
         <p style={{marginLeft:"20px"}}>
        <label>
        <input className="with-gap" name="group3" type="radio"/>
        <span>Buyer</span>
        </label>
         </p>
         <p style={{marginLeft:"20px"}}>
        <label>
        <input className="with-gap" name="group3" type="radio"/>
        <span>Broker</span>
        </label>
         </p>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1"  className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Message</label>
        </div>
      </div>
      <div className="right-align">
        <button className="btn waves-effect deep-purple darken-4">Submit</button>
      </div>
          </form>
       </div>
     </div>
    )
  }
}

export default Section3
