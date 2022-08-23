import React from 'react'
import './Notifications.css'
import { getLatestNotification } from './utils'

const Notifications= () => {

   let clickMessage = () => console.log ('Close-button has been clicked');
   return (
   <div className='Notifications'>
        <p> Here is a list of notifications</p>
        <ul>
         <li data="default">New course available</li>
         <li data="urgent">New resume available</li>
         <li dangerouslySetInnerHTML={{__html: getLatestNotification()}} />
        </ul>
        <button style={{color: '#ffffff'}} aria-label="Close" onClick={clickMessage}>
         <img src='./favicon.ico' alt='close-button icon'/>
        </button>
    </div>
   )
}

export default Notifications;