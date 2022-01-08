import React, { Component } from 'react'
import '../../App.css'
import camera from  '../../images/camera.png'
import wallet from '../../images/wallet1.png' 
import fort from '../../images/fortmatic.png'
import metamask from '../../images/metamask.png'
import portis from '../../images/portis1.png'
import trust from '../../images/trust.png'
export class Section5 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 l12">
          <h4 className="deep-purple-text lighten-2 center-align" style={{fontWeight:"bolder",marginTop:"105px"}}>Say Hello To EscrowBear <sup><i className="far fa-registered" style={{fontSize:"15px"}}></i></sup></h4>
          <div className="row" style={{marginTop:"110px"}}>
            <div className="col s12 l4 center-align">
              <div>
              <i className="fas fa-lock section5Icon  white-text" style={{fontSize:"55px",padding:"30px"}}></i>
              <h5 className="blue-grey-text darken-4" style={{fontWeight:"bolder"}}>Truely Secured</h5>
              <p className="blue-grey-text darken-3" style={{fontSize:"25px"}}>Escaroo's proprietary KeylessEscrow® system willkeep your funds truly secure during the entire transaction process.</p>
              </div>
            </div>
            <div className="col s12 l4 center-align">
              <div>
              <i className="fas fa-user-check section5Icon  white-text" style={{fontSize:"50px",padding:"30px"}}></i>
              <h5 className="blue-grey-text darken-4" style={{fontWeight:"bolder"}}>Fully Compliant</h5>
              <p className="blue-grey-text darken-3" style={{fontSize:"25px"}}>It's good to know who you're dealing with, so we verify each and every user ensuring transactions are fully compliant.</p>
              </div>
            </div>
            <div className="col s12 l4 center-align">
              <div>
              <i className="fas fa-heart section5Icon  white-text" style={{fontSize:"50px",padding:"30px"}}></i>
              <h5 className="blue-grey-text darken-4" style={{fontWeight:"bolder"}}>Totally Awesome</h5>
              <p className="blue-grey-text darken-3" style={{fontSize:"25px"}}>We designed the Escaroo platform with everything needed to make your transaction experience totally awesome.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 l5">
              <img src={camera} alt="" className="responsive-img" style={{width:"400px",borderRadius:"15px"}}/>
            </div>
            <div className="col s12 l7">
              <h3 className="deep-purple-text lighten-3 left-align">Watch The EscrowBear Promo Video</h3>
              <p className="left-align blue-grey-text darken-3" style={{fontSize:"25px"}}>Learn how Escaroo can help with all your bitcoin & <br/>cryptocurrency payment needs.</p>
              <div>
              <i className="far fa-play-circle section5PlayIcon" style={{fontSize:"100px"}}></i>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop:"50px"}}>
            <div className="col s6 l3 m3 center-align">
              <img src={wallet} alt="" className="responsive-img"/>
            </div>
            <div className="col s6 l2 m2 center-align">
              <img src={fort} alt="" className="responsive-img"/>
            </div>
            <div className="col s6 l2 m2 center-align">
              <img src={metamask} alt="" className="responsive-img"/>
            </div>
            <div className="col s6 l2 m2 center-align">
              <img src={portis} alt="" className="responsive-img"/>
            </div>
            <div className="col s6 l3 m3 center-align">
              <img src={trust} alt="" className="responsive-img"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Section5
