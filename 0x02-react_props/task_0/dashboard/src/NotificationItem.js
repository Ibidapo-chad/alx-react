import React from 'react';

function NotificationItem(props) {
    return (
        <>
            <li value={props.value} dangerouslySetInnerHTML={props.html} dataNotificationType={props.type}/>
        </>
    )
}

export default NotificationItem