import { icecreamSlice } from "./icecreamSlice";
import {createLogger} from 'redux-logger'

const { createSlice, configureStore } = require("@reduxjs/toolkit");


//using this createSLice we can configure initialState,redcuers,action types etc
 var cakeSlice =  createSlice({

    name:'slice1',
    initialState:{
        cakeCount : 10
    },
//below key names will be generated as action types
//also action creatore will be created
    reducers :{
        INCREMENT : (state,action)=>{

            console.log("INC from CAKE is called.")

                state.cakeCount=state.cakeCount+1

        },

        DECREMENT: (state,action)=>{
            state.cakeCount=state.cakeCount-1
        }
    }
  })






  console.log(cakeSlice.actions)

  //console.log(cakeSlice.reducer)//using this redcuer object store will be created
  export let {INCREMENT,DECREMENT} =  cakeSlice.actions

  const middleware = [];

  middleware.push(createLogger());
  const enhancers = [...middleware];

//while configuring store we have to pass reducer object of a single/multiple slices
    // var toolkitStore=  configureStore({reducer: cakeSlice.reducer})

   export var toolkitStore=  configureStore({reducer: {cake:cakeSlice.reducer,ice: icecreamSlice.reducer}, 
    
    middleware:enhancers
})

    toolkitStore.subscribe(()=>{
      console.log( "cakecount from toolkit example" ,toolkitStore.getState().cake.cakeCount)
    })

    toolkitStore.dispatch(INCREMENT())
    toolkitStore.dispatch(INCREMENT())

    toolkitStore.dispatch(INCREMENT())

    toolkitStore.dispatch(DECREMENT())


  //configureStore({reducer: {cake:cakeSlice.reducer}})


