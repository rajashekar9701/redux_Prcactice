import logo from './logo.svg';
import './App.css';

import Header from './LiftingState/header.component'
import { createContext, useState } from 'react';
import Logincomponent from './LiftingState/login.component';
import './Redux/simplereduxconfig'
import { Provider } from 'react-redux';
import CakeComponent from './Redux/cakeComponent';
import { shopstore } from './Redux/simplereduxconfig';
import MegaStorecomp from './Redux/megaStorecomp';
import './ReduxToolkit/simpletoolkitconfig'
import { toolkitStore } from './ReduxToolkit/simpletoolkitconfig';
import HeaderAuth from './Authentication/Header';
import Auth from './Authentication/Authentication'
import UserProfile from './Authentication/User.profile'
import { authSTore } from './Authentication/AuthirizationConfig';
import { albumSTore } from './AsyncActions/albumconfig';
import AlbumComponent from './AsyncActions/AlbumComponent';
import { superHeroStore } from './SuperHeroExample/Reducer/characterReducer';
import CharacterCOmponent from './SuperHeroExample/Components/CharacterCOmponent';
import './SuperHeroExample/Styles/index.css'
import HerosListComponent from './SuperHeroExample/Components/HerosListComponent';
import SquadStats from './SuperHeroExample/Components/SuperSqad';
import { Counterstore } from './ClassComp/counterconfig';
import CounterCOmp from './ClassComp/CounterCOmp';
import { Data } from './ClassComp/counterconfig';
import TimeCount from './TimeCounter/TimeCount';
 export var loginContext=  createContext()
function App() {


  let [userName,setUserName] =  useState()

  var data= Data
console.log("+++++++++++++++++++++",data)
  return (


    // <Provider store={Counterstore}>
    //   {data}
    //   <CounterCOmp></CounterCOmp>

    // </Provider>

    <Provider store={superHeroStore}>
      <div className="App">
         <div className="col-md-4">
           <CharacterCOmponent />
        </div>

        <div className="col-md-4">
           {/* <HerosListComponent /> */}
           <TimeCount/>
        </div>

        
        <div className="col-md-4">
           <SquadStats />
        </div>
    </div>

    </Provider>

    // <Provider store={albumSTore}>


    //   <AlbumComponent></AlbumComponent>
    
    //     {/* <HeaderAuth></HeaderAuth>
    //     <Auth></Auth>
    //     <UserProfile></UserProfile> */}
    // </Provider>


  );
}

export default App;
