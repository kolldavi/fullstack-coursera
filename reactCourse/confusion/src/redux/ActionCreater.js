import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, comment, author) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		comment: comment,
		author: author
	}
});

//-----------  comments  -----------------

//thunk return function that dispatches actions
export const fetchComments = () => dispatch => {
	return fetch(baseUrl + 'comments')
		.then(response => response.json())
		.then(data => dispatch(ADD_COMMENTS(data)));
};
export const commentsFailed = errMsg => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errMsg
});

export const ADD_COMMENTS = comments => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

//----------- Dishes  -----------------

//thunk return function that dispatches actions
export const fetchDishes = () => dispatch => {
	dispatch(dishesLoading());

	return fetch(baseUrl + 'dishes')
		.then(response => response.json())
		.then(dishes => dispatch(addDishes(dishes)));
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

//----------- Promos  -----------------

export const fetchPromos = () => dispatch => {
	dispatch(promosLoading());
	return fetch(baseUrl + 'promotions')
		.then(response => response.json())
		.then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = errMsg => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errMsg
});

export const addPromos = promos => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});
