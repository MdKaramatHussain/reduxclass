import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

function HooksIceCreamContainer() {
    // useSelector is a hook use to hold redux state
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams)
    
    // useDispatch is use to dispatch an action with redux state
    const dispatch = useDispatch()
    return (
    <div>
    <h2>Data comming from redux hook Num of cakes - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())} >Buy Ice-Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer
