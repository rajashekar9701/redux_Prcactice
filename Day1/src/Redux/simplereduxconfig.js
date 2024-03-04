const { createStore, combineReducers } = require("redux")


//global state
var initialState={
    cakeCount:10
}


var initialState1={

    icecreamCOunt:10
}

//Reducer 
var cakeReducer= (state=initialState,action)=>{
    switch(action.type){
        case "INC":
            return {
                cakeCount: state.cakeCount+action.data
            }


            //state.cakeCount=state.cakeCount+1

        case "DEC":
                return {
                    cakeCount: state.cakeCount-action.data
                }   
                
          default:
            
              return state
    }

}



var icecreamReducer= (state=initialState1,action)=>{
    switch(action.type){
        case "INC1":
            return {
                icecreamCOunt: state.icecreamCOunt+action.data
            }

        case "DEC1":
                return {
                    icecreamCOunt: state.icecreamCOunt-action.data
                }   
                
          default:
            
              return state
    }

}

//Create a store
//var cakeStore= createStore(cakeReducer)
  var rootredcuer= combineReducers({
    cake:cakeReducer,
    ice:icecreamReducer
   })

export var shopstore = createStore(rootredcuer)

//store has subscribe method
// console.log("Initial state" , store.getState().cake.cakeCount)
// store.subscribe(()=>{  // will be called whenever state changes
//     console.log("cakeCOunt", store.getState().cake.cakeCount)
// })



// store.subscribe(()=>{  // will be called whenever state changes
//     console.log("iceCreamCount", store.getState().ice.icecreamCOunt)
// })

// //we will dispatch action to  a store (Later on it will be dispatched from COmponent)

// store.dispatch({type:"INC",data:1}) //specify intention
// store.dispatch({type:"INC",data:2})
// store.dispatch({type:"INC",data:3})
// store.dispatch({type:"DEC",data:1})

// store.dispatch({type:"INC1",data:5})
// store.dispatch({type:"DEC1",data:2})