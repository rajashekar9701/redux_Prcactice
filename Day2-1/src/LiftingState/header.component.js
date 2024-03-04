import React from 'react'

import { useContext } from 'react'

import { loginContext } from '../App'
export default function Headercomponent(props) {



  let {userName}  =   useContext(loginContext)

  return (
    <div>

        <h1>Welcome {userName} </h1>
    </div>
  )
}
