import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddCharacter } from '../Reducer/characterReducer'

export default function CharacterCOmponent() {




   var characters= useSelector(state=>state.charadata)

 var dispatch=  useDispatch()
  return (
    <div>

        <h4>Characters</h4>

        {

            characters.map(character=>{

                return (

                    <li className="list-group-item" key={character.id}>
                            <div className='list-item'>
                                {character.name}
                            </div>

                            <div className='list-item right-button' onClick={()=>dispatch(AddCharacter(character.id))}>
                                +
                            </div>
                    </li>
                )
            })
        }
    </div>
  )
}
