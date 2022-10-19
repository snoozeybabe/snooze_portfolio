import { createContext, useState, useReducer, useEffect } from 'react';
import { globalState } from './reducers/globalState';
import { ROUTES } from '../utils/constant';

const initialState = {
	session: {},
	route: ROUTES[0].path,
	routeName: ROUTES[0].routeName,
	nextRouteName: ROUTES[1].routeName,
	nextRoutePath: ROUTES[1].path,
	prevRouteName: null,
	prevRoutePath: null,
};

const GlobalContext = createContext({});

const combineReducers =
	(...reducers) =>
	(state, action) => {
		for (let i = 0; i < reducers.length; i++)
			state = reducers[i](state, action);
		return state;
	};

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		combineReducers(globalState),
		initialState
	);
	const val = { state, dispatch };
	return (
		<GlobalContext.Provider value={val}>{children}</GlobalContext.Provider>
	);
};

export { GlobalContext, ContextProvider };
