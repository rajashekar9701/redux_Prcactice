import React, { Component } from 'react'
import { increment,decrement } from './counterconfig';
import { connect } from 'react-redux';

 class CounterCOmp extends Component {


    constructor(){

        super()
    }
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>

        <button onClick={()=>this.props.add()}>Increment</button>

        <button onClick={()=>this.props.sub()}>Decrement</button>

      </div>
    )
  }
}

//we willget state data from store , return it as object so it will be available as props toa class component
function mapStateToProps(state) {  // useSelector()
    const counter = state.counter;
    return {
        counter
  
   };
}

// object returned from here will be available as props to this class component
function  mapDispatchToProps(dispatch){  //useDisptach()
    return {
      add: () => dispatch(increment()),
      sub: () => dispatch(decrement()),
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(CounterCOmp);


