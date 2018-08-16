import { createStore, combineReducers } from 'redux';
import { Reducer } from './reducer';
import { DISHES } from './reducers/dishes';
import { COMMENTS } from './reducers/comments';
import { PROMOTIONS } from './reducers/promotions';
import { LEADERS } from './reducers/leaders';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		})
	);

	return store;
};
