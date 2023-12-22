
// In this file we define our action creator
// There is only one action  Buy Cake in our application

// Defining action creatore =>An action creator is a function which return  JS object
const BUY_CAKE = 'BUY_CAKE';
export const buyCake = () => {
    return{
        //It is a JS object having type property
        type: BUY_CAKE
    }
}

