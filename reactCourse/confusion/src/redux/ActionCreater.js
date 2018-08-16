import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, comment, author) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		comment: comment,
		author: author
	}
});

//thunk return function that dispatches actions
export const fetchDishes = () => dispatch => {
	dispatch(dishesLoading(true));
	setTimeout(() => {
		dispatch(addDishes(DISHES));
	}, 2000);
};

// return action object
export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errMsg => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errMsg
});

export const addDishes = dishes => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});
