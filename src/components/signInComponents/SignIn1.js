import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../HomeComponents/Footer'
import leftImage from '../../images/leftImage1.png'
import captcha from '../../images/captcha.png'
export class SignIn1 extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
      localEmail:"",
      localPassword:""
    }
  }

  componentDidMount(){
   
    const data=localStorage.getItem('email');
    this.setState({localEmail:data})
    const data1=localStorage.getItem('password');
    this.setState({localPassword:data1})
    const M=window.M
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, {});
    });
  }
  onHandleSubmit=(e)=>{
    e.preventDefault()
    const M=window.M
   if(this.state.email===""||this.state.password===""){
    M.toast({html: 'Please fill all the fields'})
   }
   else if(this.state.email!==this.state.localEmail){
    M.toast({html: 'Email is invalid'})
   }
   else if(this.state.password!==this.state.localPassword){
    M.toast({html: 'Password is invalid'})
   }
   else{
     this.props.history.push('/dashboard')
   }
   
  }
  render() {
    return (
      <div className="container-fluid">
             <div className="row">
      <div className="col s12 l12 signUpColumn">
        <div style={{marginTop:"20px"}}>
        <Navbar/>
        </div>
         <h4 className="white-text center-align" style={{fontWeight:"bolder",letterSpacing:"1.5px",marginTop:"190px"}}>Login To Dashboard</h4>
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
      <h5 style={{borderBottom:"2px solid black",paddingBottom:"15px",fontWeight:"bolder",marginTop:"90px"}}>
        Login To Your Account
        </h5>
        <form className="col s12" onSubmit={this.onHandleSubmit}>
        <div className="row" style={{marginTop:"70px"}}>
        <div className="input-field col s12 l6">
          <input id="email" type="email" className="validate" onChange={e=>this.setState({email:e.target.value})} value={this.state.email}/>
          <label htmlFor="email">Enter Your Email</label>
        </div>
      </div>
      <div className="row" style={{marginTop:"25px"}}>
        <div className="input-field col s12 l6">
          <input id="password" type="password" className="validate" onChange={e=>this.setState({password:e.target.value})} value={this.state.password}/>
          <label htmlFor="password">Enter Your Password</label>
          <div className="right-align">
          <i className="fas fa-question deep-purple darken-4 white-text tooltipped" data-position="bottom" data-tooltip="Forgot your password? Click on the “Reset Password?”" style={{padding:"10px",borderRadius:"50%"}}></i>
          </div>
        </div>
      </div>
      <div className="col s12 left-align l6">
        <img src={captcha} alt="" className="responsive-img"/>
        <span><button className="btn waves-effect deep-purple darken-4 white-text" style={{padding:"0px 20px"}}>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="" className="deep-purple-text darken-4" style={{fontWeight:"bolder"}}>Reset Password</a></span>
      </div>
        </form>
      
      </div>
      </div>
      <Footer/>
    </div>
    )
  }
}

export default SignIn1
