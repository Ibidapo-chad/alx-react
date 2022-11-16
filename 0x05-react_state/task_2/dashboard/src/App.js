import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications';
import CourseList from './CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from './utils';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import Bodysection from './BodySection/BodySection';
import { AppContext, defaultUser } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);
    this.logIn= this.logIn.bind(this);

    this.state= {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
				this.setState({ user: defaultUser });
			},
    }; //check how proptypes can be used in class based components

    this.notificationData = [{id: 1, type: 'default', value: 'New course available', html: ''},
      {id: 2, type: 'urgent', value: 'New resume available', html: ''},
      {id: 3, type: 'default', value: '', html: getLatestNotification()}];
      //CHECK DATA TYPE VALIDATION FOR HTML

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

  handleDisplayDrawer= () => {
    this.setState({displayDrawer: true})
  }

  handleHideDrawer = () => {
    this.setState({displayDrawer: false})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true,
			},
		});
	}
  
  render() {

    return (
      <React.Fragment>
        <Notifications listnotifications={this.notificationData} 
                        handleDisplayDrawer={this.handleDisplayDrawer}
                        handleHideDrawer={this.handleHideDrawer}
                        displayDrawer={this.state.displayDrawer}
        />
        <Header />
        { !this.state.user.isLoggedIn ? (<BodySectionWithMarginBottom title='Log in to continue'>
            <Login logIn= {this.logIn}/>
          </BodySectionWithMarginBottom>)  : 
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={this.datar}/>
          </BodySectionWithMarginBottom>}
        <Bodysection title='News from school'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis at tempora odio, necessitatibus repudiandae
            reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
            ipsa iste vero dolor voluptates.
          </p>
        </Bodysection>
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


export default App;
