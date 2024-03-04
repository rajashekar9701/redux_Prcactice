import React from 'react'
import { useSelector } from 'react-redux'

export default function MegaStorecomp() {



    var cakecount=  useSelector(state=>state.cake.cakeCount)




  return (
    <div>
        <h1>Cake COunt from Mega Store component</h1>
        <h1>{cakecount}</h1>
    </div>
  )
}
