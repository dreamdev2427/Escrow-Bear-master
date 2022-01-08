import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import '../../App.css'
import {useHistory} from 'react-router-dom'
import leftImage from '../../images/signupLeftImage.png'
import captcha from '../../images/captcha.png'
import Footer from '../HomeComponents/Footer'
import bar1 from '../../images/bar1.png'
import {useDispatch,useSelector} from 'react-redux'
import {setUserData} from '../actions/birdActions'
function SignUp1() {
  const dispatch=useDispatch()
  const [user,setUser]=useState({firstName:"",lastName:"",password:"",confirmPassword:"",email:"",confirmEmail:"",phoneNumber:"",country:"",file:""})
  const [checked,setChecked]=useState(false)
  const history=useHistory()
  const M=window.M

  const onHandleSubmit=(e)=>{
      e.preventDefault()
      if(user.firstName===""||user.lastName===""||user.password===""||user.confirmPassword===""||user.email===""||user.confirmEmail===""||user.phoneNumber===""||user.country===""){
        M.toast({html: 'Please fill all the fields'})
      }
      else if(user.password!==user.confirmPassword){
        M.toast({html: 'Passwords must match'})
      }
      else if(checked==false){
        M.toast({html: 'Please agree to the terms and conditions'})
      }
      else{
       
        dispatch(setUserData(user,history))
      }
          
     
  }
  const onImageChange=(e)=>{
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setUser({...user,file:e.target.result})
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
    <div className="row ">
     <div className="col s12 l3">
     <img src={leftImage} alt="" className="responsive-img" style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}/>
     </div>
     <div className="col s12 l9" style={{marginTop:"10px"}}>
      <img src={bar1} alt="" className="responsive-img"/>
       <form className="col s12" onSubmit={onHandleSubmit}>
       <div className="row">
     <div className="input-field col s6">
       <input  id="firstName" type="text" className="validate" onChange={e=>setUser({...user,firstName:e.target.value})} value={user.firstName}/>
       <label htmlFor="firstName">First Name</label>

     </div>
     <div className="input-field col s6">
       <input id="lastName" type="text" className="validate" onChange={e=>setUser({...user,lastName:e.target.value})} value={user.lastName} />
       <label htmlFor="lastName">Last Name</label>
     </div>
   </div>
   <div className="row">
     <div className="input-field col s6">
       <input  id="password" type="password" className="validate" onChange={e=>setUser({...user,password:e.target.value})} value={user.password}/>
       <label htmlFor="password">Password</label>
     </div>
     <div className="input-field col s6">
       <input id="password1" type="password" className="validate" onChange={e=>setUser({...user,confirmPassword:e.target.value})} value={user.confirmPassword}/>
       <label htmlFor="password1">Confirm Password</label>
     </div>
   </div>
   <div className="row">
     <div className="input-field col s6">
       <input  id="email" type="email" className="validate" onChange={e=>setUser({...user,email:e.target.value})} value={user.email}/>
       <label htmlFor="email">Email Address</label>
     </div>
     <div className="input-field col s6">
       <input id="email2" type="email" className="validate" onChange={e=>setUser({...user,confirmEmail:e.target.value})} value={user.confirmEmail} />
       <label htmlFor="email2">Confirm Email Address</label>
     </div>
   </div>
   <div className="row" >
     <div className="input-field col s6">
       <input  id="phoneNumber" type="text" className="validate" onChange={e=>setUser({...user,phoneNumber:e.target.value})} value={user.phoneNumber}/>
       <label htmlFor="phoneNumber">Phone Number</label>
     </div>
     <div className="input-field col s6">
       <input id="country" type="text" className="validate" onChange={e=>setUser({...user,country:e.target.value})} value={user.country}/>
       <label htmlFor="country">Enter Your Country</label>
     </div>
   </div>
   <div className="row">
     
     <div className="file-field input-field col s12">
   <div className="btn red">
     <span>Choose File</span>
     <input type="file" onChange={onImageChange}/>
   </div>
   <div className="file-path-wrapper">
     <input className="file-path validate" type="text" placeholder="Upload NIC,Passport or Bank Statement"  />
   </div>
   
 </div>
  
     <div className="input-field col s12 center-align">
       <img src={captcha} alt="" className="responsive-img" style={{width:"400px"}}/>
     </div>
   </div>
   <div className="row">
     <div className="col s12 l12 center-align grey-text darken-1">
     <p>
   <label>
     <input type="checkbox" onChange={e=>setChecked(!checked)}/>
     <span>I testify that all the information provided above is correct. In case of cheat or fraud <br/>
         EscrowBear have the right to take legal actions.<a className="deep-purple-text lighten-2">KNOW MORE</a></span>
   </label>
     </p>
     </div>
   </div>
   <div className="row">
     <div className="col s6 l6 center-align">
       <a href="/signIn" className="deep-purple-text lighten-2" style={{fontWeight:"bolder"}}>Sign In Instead ?</a>
     </div>
     <div className="col s6 l6 center-align">
       <button  className="btn waves-effect  deep-purple darken-4 white-text" style={{paddingRight:"20px",fontWeight:"bolder"}}>Let's Go</button>
     </div>
   </div>
       </form>
     </div>
    </div>
    <Footer/>
  </div>
  )
}

export default SignUp1
