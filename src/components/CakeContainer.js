import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'


function CakeContainer(props) {
    
  return (
    <div>
      <h2>Number of cakes-{props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  )
}

// Step 1 to get state from redux store 
// defining a function which get redux state as a parameter and return an object
// It maps state from redux store to a component props
const mapStateToProps = (state) => { //It also called selector=> A selector is nothing but return store state information from the redux store
    
    return { //Returning an object
        numOfCakes: state.cake.numOfCakes    // in our example there is only one state which we are tryiny to access
    }
}

// Step 2 dispatch action from redux and return object
// It maps dispatch of an action creator to a prop of our component
const mapDispatchToProps = (dispatch) => {
    
    return{
        buyCake: () => dispatch(buyCake())
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
