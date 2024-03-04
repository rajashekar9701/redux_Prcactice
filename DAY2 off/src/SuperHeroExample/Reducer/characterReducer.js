import { Data } from "../Data/Characters";
import {configureStore, createSlice} from '@reduxjs/toolkit'

//Data:{
   // charadata:[]//it is filled
   //herosdata :[] //it is emtpy
//}




var characterSlice= createSlice({

    name:'Slice1',
    initialState: Data,


    reducers:{

        AddCharacter :(state,action)=>{
                    // here we should remove selected character from charadata of our state
                    console.log(action.payload)
                    state.charadata = state.charadata.filter(chara=>chara.id != action.payload)

                    //here we are adding new charcter by finding it from orginal data into Herosdata array
                    state.herosdata= [...state.herosdata, Data.charadata.find(p=>p.id ==action.payload)]
        },


        RemoveCharacter:(state,action)=>{

            state.herosdata = state.herosdata.filter(chara=>chara.id != action.payload)

            //here we are adding new charcter by finding it from orginal data into Herosdata array
            state.charadata= [...state.charadata, Data.charadata.find(p=>p.id ==action.payload)]

        }
    }
})


export var {AddCharacter,RemoveCharacter}= characterSlice.actions

  export var superHeroStore= configureStore({
    reducer: characterSlice.reducer
  })