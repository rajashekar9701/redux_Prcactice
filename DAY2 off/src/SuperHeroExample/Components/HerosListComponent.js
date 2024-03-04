import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCharacter } from '../Reducer/characterReducer'

export default function HerosListComponent() {

    

   var herosdata= useSelector(state=>state.herosdata)

   var dispatch=  useDispatch()
  return (
    <div>

        <h4>HerosList</h4>

        {

herosdata.map(character=>{

    return (

        <li className="list-group-item" key={character.id}>
                <div className='list-item'>
                    {character.name}
                </div>

                <div className='list-item right-button'  onClick={()=>dispatch(RemoveCharacter(character.id))}>
                    -
                </div>
        </li>
    )
})
}
    </div>
  )
}
