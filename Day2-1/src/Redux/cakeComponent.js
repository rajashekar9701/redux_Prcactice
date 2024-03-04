import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT,DECREMENT } from '../ReduxToolkit/simpletoolkitconfig'

export default function CakeComponent() {

//in this component we want to get state from centralized store
//That means we have to Provide this store to required components

// The useSelector hook is used to extract the state of a component from the redux store using the selector function. 
// The useSelector() hook will subscribe to the redux store and runs whenever an action is dispatched

       var cakecount=     useSelector(state=>state.cake.cakeCount)
       var dispatch =  useDispatch()

    return (
    <div>

        <h1>{cakecount}</h1>

        {/* <button  onClick={()=> dispatch({type:"INC",data:1})}>Increment</button>
        <button onClick={()=>dispatch({type:"DEC",data:1})}>Decrement</button> */}


        <button onClick={()=> dispatch(INCREMENT())}>Increment</button>
        <button onClick={()=>dispatch(DECREMENT())}>Decrement</button>
    </div>
  )
}
