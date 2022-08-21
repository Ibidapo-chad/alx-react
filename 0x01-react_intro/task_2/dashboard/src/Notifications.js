import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils'

const Notifications= () => {

   return (
   <div className='Notifications'>
        <p> Here is a list of notifications</p>
        <ul>
         <li>New course available</li>
         <li>New resume available</li>
         <getLatestNotifications />
        </ul>
        <button style={{color:'white'}} aria-label="Close" onClick={console.log("Close button has been clicked")}>
         <img src='./favicon.ico' alt='close-button icon'/>
        </button>
    </div>
   )
}

export default Notifications;