// In this file we define our Reducer
// reducer = (initialstate, action)=>updatedState

// Defining reducer part
const initialState = {
    numOfCakes: 10
}

const BUY_CAKE = 'BUY_CAKE';

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
    
        default:
            return state
    }
}

export default cakeReducer;
