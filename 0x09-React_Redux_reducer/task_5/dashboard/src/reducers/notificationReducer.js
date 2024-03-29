import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
	SET_LOADING_STATE,
} from '../actions/notificationActionTypes';


export const initialNotificationState = {
	notifications: [],
	filter: 'DEFAULT',
	loading: false,
};

const notificationReducer= (state = Map(initialNotificationState), action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const normalizedData = notificationsNormalizer(action.data);

			Object.keys(normalizedData.notifications).map((key) => {
				normalizedData.notifications[key].isRead = false;
			});
			return state.mergeDeep(normalizedData);
		
		case MARK_AS_READ: {
			return state.setIn(
				[
					'notifications',
					'entities',
					'notifications',
					action.index.toString(),
					'isRead',
				],
				true
			);
		}
		case SET_TYPE_FILTER: {
			return state.set('filter', action.filter);
		
		}

		case SET_LOADING_STATE:
			return state.set('loading', action.loading);

		default:
			return state;
	}
};

export default notificationReducer;