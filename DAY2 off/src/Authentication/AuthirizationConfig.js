
import {configureStore, createSlice} from '@reduxjs/toolkit'
// import { authSlice1 } from './slice1'

 var authSlice=  createSlice({

    name :'AuthSLice',
    initialState:{

        isUserLoggedIn:false
    },


    reducers:{

          login: (state,action)=>{

            state.isUserLoggedIn=true
          },

          logout:(state,action)=>{

            state.isUserLoggedIn=false
          }
    }
  })

  export var authSTore=     configureStore({reducer: authSlice.reducer})

  // export var authSTore=     configureStore({reducer: {slice1:authSlice.reducer,slice2:authSlice1.redcuer}})


 export  var {login,logout} =  authSlice.actions


   




