import React from 'react'
import './Notifications.css'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';
import './NotificationItemShape';
import NotificationItemShape from './NotificationItemShape';

const Notifications= ({displayDrawer, listnotifications}) => {

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
};

Notifications.propTypes = {
   displayDrawer : PropTypes.bool,
   listnotifications : PropTypes.arrayOf(NotificationItemShape) 
}
Notifications.defaultProps = {
   displayDrawer : false,
   listnotifications : []
}

export default Notifications