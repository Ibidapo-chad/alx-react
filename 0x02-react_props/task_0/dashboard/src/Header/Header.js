import logo from '../Holberton-logo.jpg';
import React from 'react';

function Header () {
    return (
     <header className="App-header">
       <img src={logo} alt="logo"/>
       <h1>School dashboard</h1>
     </header>
    )
};

export default Header;