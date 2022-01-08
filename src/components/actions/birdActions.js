export const setUserData=(query,history)=>async(dispatch,getState)=>{
  localStorage.setItem("firstName",query.firstName)
  localStorage.setItem("lastName",query.lastName)
  localStorage.setItem("email",query.email)
  localStorage.setItem("password",query.password)
  history.push('/signUp/2')
  window.location.reload(false)
  dispatch({
    type:"AUTHENTICATE"
  })
}
export const setUserData1=(history)=>async(dispatch,getState)=>{
  history.push('/signUp/3')
  window.location.reload(false)
  dispatch({
    type:"AUTHENTICATE"
  })
}
export const setUserData2=(history)=>async(dispatch,getState)=>{
  history.push('/signUp/4')
  window.location.reload(false)
  dispatch({
    type:"AUTHENTICATE"
  })
}
export const setUserData3=(history)=>async(dispatch,getState)=>{
  history.push('/signIn')
  window.location.reload(false)
  dispatch({
    type:"AUTHENTICATE"
  })
}
export const setLoginData=(history)=>async(dispatch,getState)=>{
  history.push('/dashboard')
  window.location.reload(false)
  dispatch({
    type:"AUTHENTICATE"
  })
}
