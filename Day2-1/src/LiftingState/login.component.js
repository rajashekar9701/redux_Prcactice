import React, { useContext, useRef, useState } from 'react'
import { loginContext } from '../App'

export default function Logincomponent() {



   var userNameRef= useRef()

 var passRef=  useRef()



   let {setUserName}  =   useContext(loginContext)

  return (
    <div>

        <label>Enter UserName:</label>
        <input type="text" ref={userNameRef} /> <br/>


        <label>Enter Password</label>
        <input type="password" ref={passRef} /> <br></br>
 

            <button onClick={()=>{
              // we have to pass UserName to Header COmponent
                setUserName(userNameRef.current.value) //we r calling state changing function which is passed from App.js

            }} >Login</button>
     </div>
  )
}
