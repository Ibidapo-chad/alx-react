import * as notificationdata from '../../notifications.json'

export default function getAllNotificationsByUser(userId) {
    return notificationdata
        .filter(notification => {notification.author.id === userId})
        .map(notification => notification.context)
}