import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);

    this.state= {isLoggedIn: false}; //check how proptypes can be used in class based components

    this.notificationData = [{id: 1, type: 'default', value: 'New course available', html: ''},
      {id: 2, type: 'urgent', value: 'New resume available', html: ''},
      {id: 3, type: 'default', value: '', html: getLatestNotification}];


    this.datar = [{id: 1, name: 'ES6', credit: 60}, 
      {id: 2, name: 'Webpack', credit: 20}, 
      {id: 3, name: 'React', credit: 40}];
  }

  handleKeydown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.props.logOut()
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  
  render() {
    return (
      <React.Fragment>
        <Notifications listnotifications={this.notificationData}/>
        <Header />
        { this.state.isLoggedIn ? <Login /> : <CourseList listCourses={this.datar}/>}
        <Footer />
      </React.Fragment>
    )
  }
}


/**function App({isLoggedIn}) {
  const datar = [{id: 1, name: 'ES6', credit: 60}, 
    {id: 2, name: 'Webpack', credit: 20}, 
    {id: 3, name: 'React', credit: 40}];

  const notificationData = [{id: 1, type: 'default', value: 'New course available', html: ''},
    {id: 2, type: 'urgent', value: 'New resume available', html: ''},
    {id: 3, type: 'default', value: '', html: getLatestNotification()}];
   
  return (
    <React.Fragment>
      <Notifications listnotifications={notificationData}/>
      <Header />
      { isLoggedIn ? <Login /> : <CourseList listCourses={datar}/>}
      <Footer />
    </React.Fragment>
  )
};*/


App.propTypes = {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn : false,
  logOut: () => {
    return;
  }
}

export default App;
