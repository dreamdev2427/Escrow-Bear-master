const initState={
  auth:false
}

export const birdReducer=(state=initState,action)=>{
  switch(action.type){
    case "AUTHENTICATE":{
      return{
        ...state,
        auth:!state.auth
      }
    }
    default:{
      return state
    }

  }
}