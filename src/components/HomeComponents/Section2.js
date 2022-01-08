import React, { Component } from 'react'
import forbes from '../../images/forbes.png'
import google from '../../images/google4.png'
import sony from '../../images/sony1.png'
import iriver from '../../images/iriver.png'
export class Section2 extends Component {
  render() {
    return (
      <div className="row grey lighten-3">
        <div className="col s6 l3 m3 section2 grey lighten-3 center-align">
        <img src={forbes} alt="" className="responsive-img"/>
        </div>
        <div className="col s6 l3 m3 section2 grey lighten-3 center-align">
        <img src={google} alt="" className="responsive-img"/>
        </div>
        <div className="col s6 l3 m3 section2 grey lighten-3 center-align">
        <img src={sony} alt="" className="responsive-img" />
        </div>
        <div className="col s6 l3 m3 section2 grey lighten-3 center-align">
        <img src={iriver} alt="" className="responsive-img"/>
        </div>
      </div>
    )
  }
}

export default Section2
