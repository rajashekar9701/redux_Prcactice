

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from './albumconfig'

export default function AlbumComponent() {


  var dispatch=  useDispatch()


   var albums=  useSelector(state=>state.albums)

   var isLoading=  useSelector(state=>state.isLoading)


  useEffect(()=>{
        dispatch(fetchContent())
  },[])



  if(isLoading){

    return "Loading..."
  }
  

  return (
    <div>

        {

            albums.map(album=><>
                <p>{album.title}</p>
            </>)
        }

    </div>
  )
}
