import React, { Component } from 'react'
import '../App.css'
import Footer from './HomeComponents/Footer'
import Section1 from './HomeComponents/Section1'
import Section2 from './HomeComponents/Section2'
import Section3 from './HomeComponents/Section3'
import Section4 from './HomeComponents/Section4'
import Section5 from './HomeComponents/Section5'
export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
      </div>
    )
  }
}

export default Home
