import { ROUTES } from '../../utils/constant';

const initState = {
	route: '/',
	routeName: 'Welcome',
	nextRouteName: '',
	levelPrev: 0,
	levelNext: 1,
};

export function globalState(state = initState, action) {
	switch (action.type) {
		case 'UPDATE_ROUTE':
			const findIndexR = ROUTES.findIndex(r => r.path === action.payload);
			return {
				...state,
				route: action.payload,
				routeName: ROUTES[findIndexR].routeName,
				nextRouteName: ROUTES[findIndexR + 1]
					? ROUTES[findIndexR + 1].routeName
					: null,
				nextRoutePath: ROUTES[findIndexR + 1]
					? ROUTES[findIndexR + 1].path
					: null,
				prevRouteName: ROUTES[findIndexR - 1]
					? ROUTES[findIndexR - 1].routeName
					: null,
				prevRoutePath: ROUTES[findIndexR - 1]
					? ROUTES[findIndexR - 1].path
					: null,
			};
		case 'UPDATE_LEVEL':
			console.log(state);
			return {
				...state,
				levelPrev: state.levelPrev - 1,
				levelNext: state.leveNext + 1,
			};
		default:
			return state;
	}
}
