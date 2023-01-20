import { getFooterCopy, getFullYear } from '../utils'
import React from 'react';
import { AppContext } from '../App/AppContext';

function Footer() {
    return (
      <AppContext.Consumer>
      {
        (context) => {
          return (
            <footer className="Footer">
              <p>
                <i>Copyright {getFullYear()} - {getFooterCopy()}.</i>
                &nbsp;
                {context.user.isLoggedIn && <a href='#'>Contact us</a>}
              </p>
            </footer>
          );
        }
      }
    </AppContext.Consumer>
	)
};

export default Footer;