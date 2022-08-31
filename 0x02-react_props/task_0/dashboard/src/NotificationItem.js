import React from 'react';

function NotificationItem(props) {
    return (
        <>
            <li dangerouslySetInnerHTML= {{__html: props.value ? props.value : props.html}}
                datanotificationtype= {props.type} />
        </>
    )
}

export default NotificationItem