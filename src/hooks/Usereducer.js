import React,{useReducer} from 'react'

//function of reducer
const func = (state,action) => {
   switch (action.type) {
    case "INCREMENT":
      return {count:state.count+1 , Text:state.Text}
    case "toggle" :
      return {count:state.count,Text:!state.Text}
     default:
      return state;
   }
}

const Usereducer = () => {

  const[state,dispatch] = useReducer(func,{count:0,Text:true})

  return (
    <div>
      
      <h2>{state.count}</h2><br/>
      <button onClick={() => {
        dispatch({ type:"INCREMENT"})
        dispatch({type:"toggle"})
      }}>Click me</button>
      {state.Text && <h3>e dikha....</h3>}
      
    </div>
  )
}

export default Usereducer





//The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a function as its first parameter and the initial state as the second.
//we can manage two or more state with single func of hook


