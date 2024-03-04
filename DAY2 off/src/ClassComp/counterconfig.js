import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterReducer =createSlice({
name:'counterReducer',
initialState:{counter:10},

reducers:{
    increment:(state,action)=>{
             

         state.counter=state.counter+1
        
    },

    decrement:(state,action)=>{
        state.counter=state.counter-1
    }
}

})

export var {increment,decrement} = counterReducer.actions

  export var Counterstore=configureStore({
    reducer:counterReducer.reducer
  })

export var Data="ABC"

