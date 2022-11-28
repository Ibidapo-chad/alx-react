import React from 'react';
import { connect } from 'react-redux';
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
    this.markNotificationAsRead= this.markNotificationAsRead.bind(this);

    this.state= {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
				this.setState({ user: defaultUser });
			},
      listnotifications: [{id: 1, type: 'default', value: 'New course available', html: ''},
      {id: 2, type: 'urgent', value: 'New resume available', html: ''},
      {id: 3, type: 'default', value: '', html: getLatestNotification()}],
      //CHECK DATA TYPE VALIDATION FOR HTML
    };

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

  markNotificationAsRead(id) {
    const read = this.state.listNotifications.filter(
			(notification) => notification.id !== id
		);

		this.setState({ listNotifications: read });
  }
  
  render() {
    const {user, logOut}= this.state;

    const {isLoggedIn}= this.props;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <React.Fragment>
          <Notifications listnotifications={this.state.listnotifications} 
                          handleDisplayDrawer={this.handleDisplayDrawer}
                          handleHideDrawer={this.handleHideDrawer}
                          displayDrawer={this.state.displayDrawer}
                          markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          { !isLoggedIn ? (<BodySectionWithMarginBottom title='Log in to continue'>
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
      </AppContext.Provider>
    )
  }
}


export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func
}


//export default App;
