import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './reducers/dishes';
import { Comments } from './reducers/comments';
import { Promotions } from './reducers/promotions';
import { Leaders } from './reducers/leaders';
import { InitialFeedback } from './forms';
import { createForms } from 'react-redux-form';
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			dishes: Dishes,
			comments: Comments,
			promotions: Promotions,
			leaders: Leaders,
			...createForms({
				feedback: InitialFeedback
			})
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk, logger)
	);

	return store;
};
