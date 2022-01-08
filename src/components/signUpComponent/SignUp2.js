import React,{useState} from 'react'
import '../../App.css'
import Navbar from '../Navbar'
import leftImage from '../../images/signupLeftImage.png'
import bar2 from '../../images/bar2.png'
import Footer from '../HomeComponents/Footer'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setUserData1} from '../actions/birdActions'
function SignUp2() {
  const dispatch=useDispatch()
  const [checked,setChecked]=useState(false)
  const history =useHistory()
  const M=window.M
  const onHandleSubmit=()=>{
    if(checked==false){
      M.toast({html: 'Please agree to the terms and conditions'})
    }
    else{
      dispatch(setUserData1(history))
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
    <div className="row">
      <div className="col s12 l3">
      <img src={leftImage} alt="" className="responsive-img" style={{borderTopRightRadius:"15px",borderBottomRightRadius:"15px"}}/>
      </div>
      <div className="col s12 l9">
        <img src={bar2} alt="" className="responsive-img"/>
        <h5 style={{borderBottom:"2px solid black",paddingBottom:"15px",fontWeight:"bolder"}}>
          Terms & Conditions Agreement Form
        </h5>
        <div style={{border:"1px solid grey",padding:"20px"}}>
          <h6 style={{fontWeight:"bolder"}}>EscrowBear Terms & Conditions</h6>
          <p className="left-align blue-grey-text darken-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.</p>
            <br/>
            <p className="left-align blue-grey-text darken-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.</p>
            <br/>
            <h6 style={{fontWeight:"bolder"}}>EscrowBear Privacy  Policy</h6>
     
            <p className="left-align blue-grey-text darken-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.</p>
        </div>
        <p style={{marginTop:"50px"}}>
      <label>
     <input type="checkbox" onChange={e=>setChecked(!checked)}/>
     <span>I agree with the terms and conditions.<a className="deep-purple-text lighten-2">KNOW MORE</a></span>
      </label>
     </p>  
     <div className="center-align">
     <button onClick={onHandleSubmit} className="btn waves-effect  deep-purple darken-4 white-text" style={{paddingRight:"20px",fontWeight:"bolder"}}>Semi Finalize</button>
      </div> 
      </div>
    </div>
    <Footer/>
     </div>
  )
}

export default SignUp2
