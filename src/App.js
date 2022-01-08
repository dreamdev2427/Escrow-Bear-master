import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/Home'
import SignUp1 from './components/signUpComponent/signUp1'
import SignUp2 from './components/signUpComponent/SignUp2'
import SignUp3 from './components/signUpComponent/SignUp3'
import SignIn1 from './components/signInComponents/SignIn1'
import SignUp4 from './components/signUpComponent/SignUp4'
import Dashboard from './components/Dashboard'

function App() {
  return (
  <Router>
    <Route path="/" exact component={Home}/>
    <Route path="/signUp" exact component={SignUp1}/>
    <Route path="/signUp/2" exact component={SignUp2}/>
    <Route path="/signUp/3" exact component={SignUp3}/>
    <Route path="/signUp/4" exact component={SignUp4}/>    
    <Route path="/signIn" exact component={SignIn1}/>
    <Route path="/dashboard" exact component={Dashboard}/>

  </Router>
  )
}

export default App
