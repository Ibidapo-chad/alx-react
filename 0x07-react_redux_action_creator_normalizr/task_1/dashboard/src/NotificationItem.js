import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        return (
            <>
                <li dangerouslySetInnerHTML= {{__html: value ? value : html}}
                    datanotificationtype= {type} 
                    onClick= {() => markAsRead(id)}
                />
            </>
        )
    }
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

/**function NotificationItem(props) {
    return (
        <>
            <li dangerouslySetInnerHTML= {{__html: props.value ? props.value : props.html}}
                datanotificationtype= {props.type} 
            />
        </>
    )
}*/
