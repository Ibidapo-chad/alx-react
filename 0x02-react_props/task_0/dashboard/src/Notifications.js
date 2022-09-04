import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';

const Notifications= ({displayDrawer}) => {

   let clickMessage = () => console.log ('Close-button has been clicked');
   return (
      <>
         <div className='menuItem'>Your notifications</div>
         { displayDrawer===false ? null : 
            (<div className='Notifications'>
               <p> Here is a list of notifications</p>
               <ul>
                  <NotificationItem type="default" value="New course available" html=""/>
                  <NotificationItem type="urgent" value="New resume available" html=""/>
                  <NotificationItem type="" value="" html={getLatestNotification()}/>
               </ul>
               <button style={{color: '#ffffff'}} aria-label="Close" onClick={clickMessage}>
               <img src='./favicon.ico' alt='close-button icon'/>
               </button>
            </div>)}
      </>
   )
};

Notifications.propTypes = {
   displayDrawer : PropTypes.bool
}
Notifications.defaultProps = {
   displayDrawer : false
}

export default Notifications