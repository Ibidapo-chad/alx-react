import React from 'react'
import './Notifications.css'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';
import './NotificationItemShape';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
   constructor(props) {
      super(props);
      this.displayDrawer= this.props.displayDrawer;
      this.listnotifications= this.props.listnotifications;
      this.markAsRead = this.markAsRead.bind(this)
   };

   shouldComponentUpdate(nextProps) {
		return nextProps.length > this.props.listNotifications.length;
	}

   markAsRead(id) {
      console.log(`Notification ${id} has been marked as read`)
   };

   render() {
      let clickMessage = () => console.log ('Close-button has been clicked');

      return (
         <>
            <div className='menuItem'>Your notifications</div>
            {console.log(this.displayDrawer)}
            { !this.displayDrawer ? null : 
               (<div className='Notifications'>
                  <p> Here is a list of notifications</p>
                  <ul>
                     {this.listnotifications.length > 0 ? 
                        this.listnotifications.map(({id, type, value, html}) => {
                           return (
                              <NotificationItem key={id} id={id} type={type} value={value} html={html} markAsRead={this.markAsRead}/>
                           )
                        }) :
                        <NotificationItem type="" value="No course available" html="" markAsRead={this.markAsRead}/>
                     }
                  </ul>
                  <button style={{color: '#ffffff'}} aria-label="Close" onClick={clickMessage}>
                     <span className='line1'></span> {/**Remember to fix css transform for icon */}
                     <span className='line2'></span>
                  <img src='./favicon.ico' alt='close-button icon'/>
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
   markAsRead: PropTypes.func
}
Notifications.defaultProps = {
   displayDrawer : false,
   listnotifications : []
}

export default Notifications

/**const Notifications= ({displayDrawer, listnotifications}) => {

   let clickMessage = () => console.log ('Close-button has been clicked');
   return (
      <>
         <div className='menuItem'>Your notifications</div>
         { displayDrawer===false ? null : 
            (<div className='Notifications'>
               <p> Here is a list of notifications</p>
               <ul>
                  {listnotifications.length > 0 ? 
                     listnotifications.map(({id, type, value, html}) => {
                        return (
                           <NotificationItem id={id} type={type} value={value} html={html} />
                        )
                     }) :
                     <NotificationItem type="" value="No course available" html=""/>
                  }
               </ul>
               <button style={{color: '#ffffff'}} aria-label="Close" onClick={clickMessage}>
               <img src='./favicon.ico' alt='close-button icon'/>
               </button>
            </div>)}
      </>
   )
}; */

