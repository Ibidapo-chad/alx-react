import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';


const initialState = {
	notifications: [],
	filter: 'DEFAULT',
};

export function notificationReducer(state = Map(initialState), action) {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const notificationData = action.data.map((item) => ({
				id: item.id,
				type: item.type,
				value: item.value,
				isRead: false,
			}));
			return state.merge({
				filter: NotificationTypeFilters.DEFAULT,
				notifications: notificationsNormalizer(notificationData),
			});
		
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
		default:
			return state;
	}
}