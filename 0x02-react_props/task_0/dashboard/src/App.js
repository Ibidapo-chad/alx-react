import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      {isLoggedIn} ? <Login /> : <CourseList />
      <Footer />
    </React.Fragment>
  )
};

App.propTypes = {
  isLoggedIn : bool
}

App.defaultProps = {
  isLoggedIn : false
}

export default App;
