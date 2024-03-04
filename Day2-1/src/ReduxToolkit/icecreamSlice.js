const { createSlice, configureStore } = require("@reduxjs/toolkit");


export var icecreamSlice =  createSlice({

    name:'slice1',
    initialState:{
        icecreamCount : 10
    },
//below key names will be generated as action types
//also action creatore will be created
    reducers :{
        INCREMENT : (state,action)=>{

            console.log("INC from ICECREAm is called.")
                state.icecreamCount=state.icecreamCount+1

        },

        DECREMENT: (state,action)=>{
            state.icecreamCount=state.icecreamCount-1
        }
    }
  })


  export let {INCREMENT,DECREMENT} = icecreamSlice.actions
