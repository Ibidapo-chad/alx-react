import React from 'react'
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import './Notifications.css'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';
import './NotificationItemShape';
import NotificationItemShape from './NotificationItemShape';
import close from '../assets/close-icon.png'

class Notifications extends React.PureComponent {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
		this.props.fetchNotifications();
	}

   render() {
      const { displayDrawer,
               listnotifications,
               handleDisplayDrawer,
               handleHideDrawer,
               markNotificationAsRead,} = this.props;

      let clickMessage = () => {
         console.log ('Close-button has been clicked');
         handleHideDrawer();
      }

      return (
         <>
            <div className='menuItem' onClick={handleDisplayDrawer}>Your notifications</div>
            {console.log(displayDrawer)}
            { !displayDrawer ? null : 
               (<div className='Notifications'>
                  <p> Here is a list of notifications</p>
                  <ul>
                     {listnotifications.length > 0 ? 
                        listnotifications.map(({id, type, value, html}) => {
                           return (
                              <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={markNotificationAsRead}/>
                           )
                        }) :
                        <NotificationItem type="" value="No course available" html="" markAsRead={markNotificationAsRead}/>
                     }
                  </ul>
                  <button style={{color: '#ffffff'}} aria-label="Close" onClick={clickMessage}>
                     <span className='line1'></span> {/**Remember to fix css transform for icon */}
                     <span className='line2'></span>
                     <img src={close} alt='close-button icon'/>
                  </button>
               </div>)
            }
         </>
      )
   }
}

Notifications.propTypes = {
   displayDrawer : PropTypes.bool,
   listnotifications : PropTypes.arrayOf(NotificationItemShape),
   id: PropTypes.number,
   markNotificationAsRead: PropTypes.func,
}
Notifications.defaultProps = {
   displayDrawer : false,
   listnotifications: [],
	handleDisplayDrawer: () => {},
	markNotificationAsRead: () => {},
   fetchNotifications: () => {},
}

const mapStateToProps = (state) => {
	return {
		listnotifications: state.notifications.get('messages'),
	};
};

const mapDispatchToProps = {
	fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);