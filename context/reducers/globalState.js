import { ROUTES } from '../../utils/constant';

export function globalState(state, action) {
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
		default:
			return state;
	}
}
