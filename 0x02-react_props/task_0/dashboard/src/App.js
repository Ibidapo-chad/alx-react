import React from 'react';
//import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
//import Login from './Login/Login';
import Notifications from './Notifications';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
