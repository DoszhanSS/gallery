import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import homeReduicer from './reduicers/home-reduicer';
import thunkMiddleware from 'redux-thunk';
import imageReducer from './reduicers/image-reduicer';


let rootReducer = combineReducers({
	home: homeReduicer,
	image: imageReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;


export default store;