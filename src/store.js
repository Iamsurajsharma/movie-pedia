import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState = {};
const middleware = [thunk];

const store = process.env.NODE_ENV==="development"? createStore(rootReducer,intialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
: createStore(rootReducer,intialState,compose(applyMiddleware(...middleware)))


export default store;