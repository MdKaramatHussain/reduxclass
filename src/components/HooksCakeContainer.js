import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

function HooksCakeContainer() {
    // useSelector is a hook use to hold redux state
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    
    // useDispatch is use to dispatch an action with redux state
    const dispatch = useDispatch()
    return (
    <div>
    <h2>Data comming from redux hook Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())} >Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
