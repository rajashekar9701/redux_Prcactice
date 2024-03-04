
import {configureStore, createSlice} from '@reduxjs/toolkit'


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

 export  var {login,logout} =  authSlice.actions


   




