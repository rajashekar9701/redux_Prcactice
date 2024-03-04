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

 export var loginContext=  createContext()

function App() {


  let [userName,setUserName] =  useState()

  return (

  // Using <provider we can provide store object to all components
<Provider store={toolkitStore}>  

    <CakeComponent></CakeComponent>
    {/* <MegaStorecomp></MegaStorecomp> */}

</Provider>


    // <div className="App">
    //   {/* <Header  userName ={userName}></Header>
    //   <Logincomponent setUserName={setUserName}></Logincomponent> */}
    //   <loginContext.Provider value={{userName,setUserName}}>
    //           <Header></Header>
    //           <Logincomponent></Logincomponent>
    //           {/* <xyz></xyz> */}
    //   </loginContext.Provider>
    // </div>
  );
}

export default App;
