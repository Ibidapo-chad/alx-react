import { normalize, schema } from 'normalizr';
import * as notificationData from '../../dist/notifications.json'

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
	author: user,
	context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
	const output = [];
	const notifications = normalized.entities.notification;
	const messages = normalized.entities.messages;

	for (const id in notifications) {
		if (notifications[id].author === userId) {
			output.push(messages[notifications[id].context]);
		}
	} //confirm the form of notifications
	return output;
};

export { normalized };

export function notificationsNormalizer(data) {
	return normalize(data, [notification]);
};