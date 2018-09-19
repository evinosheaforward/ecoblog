import { createStore, applyMiddleware, combineReducers } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
	title: "Home",
	content: "",
};

const middleware = [thunk];

rootReducer

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default store;
