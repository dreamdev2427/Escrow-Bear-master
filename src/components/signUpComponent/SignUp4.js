import React from 'react'
import '../../App.css'
import Navbar from '../Navbar'
import leftImage from '../../images/signupLeftImage.png'
import Footer from '../HomeComponents/Footer'
import bar3 from '../../images/bar3.png' 
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setUserData3} from '../actions/birdActions'
function SignUp4() {
  const dispatch=useDispatch()
  const history =useHistory()
  const onHandleSubmit=()=>{
    dispatch(setUserData3(history))
  }
  return (
    <div className="container-fluid">
          <div className="row">
      <div className="col s12 l12 signUpColumn">
        <div style={{marginTop:"20px"}}>
        <Navbar/>
        </div>
         <h4 className="white-text center-align" style={{fontWeight:"bolder",letterSpacing:"1.5px",marginTop:"190px"}}>Registration</h4>
         <p className="center-align grey-text lighten-5" style={{fontSize:"25px"}}>The No. 1 Crypto Escrow Platform to help you buy/sell your crypto currencies <br/>in a 100% secure enviroment</p>
         <div className="center-align" >
         <a href=""><i className="fas fa-angle-double-down white-text arrowDown" style={{fontSize:"45px"}}></i></a>
         </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l3">
      <img src={leftImage} alt="" className="responsive-img" style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}/>
      </div>
      <div className="col s12 l9">
      <img src={bar3} alt="" className="responsive-img"/>
      <h5 style={{borderBottom:"2px solid black",paddingBottom:"15px",fontWeight:"bolder"}}>
        Let's Escrow
        </h5>
        <div className="center-align">
        <h3 className="deep-purple-text darken-4" style={{fontWeight:"1000",marginTop:"75px"}}>Verification Successful !</h3>
          <i className="far fa-check-circle deep-purple darken-4 white-text" style={{fontSize:"55px",padding:"30px",borderRadius:"50%"}}></i>
          <p className="deep-purple-text darken-4" style={{marginTop:"35px",fontWeight:"bolder"}}>Your account has been verified using email address. Your account is now under 
          review. One of our team member will reach out you. If you Wish you can Update
            you legal Documents Here or go to dashboard.</p>
            <div className="center-align" style={{marginTop:"150px"}}>
            <button onClick={onHandleSubmit} className="btn waves-effet white-text deep-purple darken-4 btn-large" style={{padding:"0px 70px",fontWeight:"bolder"}}>Login</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SignUp4
