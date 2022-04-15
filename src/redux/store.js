import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import homeReduicer from './reducers/home-reduicer';
import thunkMiddleware from 'redux-thunk';
import imageReducer from './reducers/image-reduicer';
import favoritesReducer from './reducers/favorites-reducer';
import someThinkReducer from './reducers/some-think-reducer';


let rootReducer = combineReducers({
	home: homeReduicer,
	image: imageReducer,
	favorites: favoritesReducer,
	someThink: someThinkReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.store = store;


export default store;