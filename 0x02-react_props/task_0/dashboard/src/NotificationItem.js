import React from 'react';
import PropTypes from 'prop-types'
function NotificationItem(props) {
    return (
        <>
            <li dangerouslySetInnerHTML= {{__html: props.value ? props.value : props.html}}
                datanotificationtype= {props.type} />
        </>
    )
}

NotificationItem.propTypes = {
    html : PropTypes.exact({
        __html: PropTypes.string
    }),
    type : PropTypes.string,
    value : PropTypes.string
}
NotificationItem.defaultProps = {
    type : "default"
}

export default NotificationItem