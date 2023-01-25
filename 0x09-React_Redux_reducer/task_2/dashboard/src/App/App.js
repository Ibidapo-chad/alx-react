import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../Utility/utils';
import BodySectionWMB from '../BodySection/BodySectionWMB';
import Bodysection from '../BodySection/BodySection';
import { AppContext, defaultUser } from './AppContext';
import {
	displayNotificationDrawer,
	hideNotificationDrawer,
  loginRequest,
  logout,
} from '../actions/uiActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeydown = this.handleKeydown.bind(this);
    this.logIn= this.logIn.bind(this);
    this.markNotificationAsRead= this.markNotificationAsRead.bind(this);

    this.state= {
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
    const read = this.state.listnotifications.filter(
			(notification) => notification.id !== id
		);

		this.setState({ listNotifications: read });
  }
  
  render() {

    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
      logout,
    } = this.props;

    return (
      <React.Fragment>
        <Notifications listnotifications={this.state.listnotifications} 
                        handleDisplayDrawer={displayNotificationDrawer}
                        handleHideDrawer={hideNotificationDrawer}
                        displayDrawer={displayDrawer}
                        markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        { !isLoggedIn ? (<BodySectionWMB title='Kindly Sign In'>
            <Login logIn= {login}/>
          </BodySectionWMB>)  : 
          <BodySectionWMB title='Course list'>
            <CourseList listCourses={this.datar}/>
          </BodySectionWMB>}
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
	hideNotificationDrawer,
  login: loginRequest,
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

//export default App;
