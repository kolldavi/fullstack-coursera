import { COMMENTS } from '../../shared/comments';
import * as ActionTypes from '../ActionTypes';

export const Comments = (state = COMMENTS, action) => {
	switch (action.type) {
		case ActionTypes.ADD_COMMENT:
			const comment = {
				id: state.length,
				...action.payload,
				date: new Date().toISOString()
			};
			return [...state, comment];

		default:
			return state;
	}
};
