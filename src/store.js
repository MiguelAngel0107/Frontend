import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
    //composeWithDevTools(applyMiddleware(...middleware))
    console.log("Aqui me rompo primero")
);
console.log("Aqui me rompo segundo")
export default store; 
console.log("Aqui me rompo tercero")