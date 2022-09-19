import { getFooterCopy, getFullYear } from '../utils'
import React from 'react';

function Footer() {
    return (
      <footer className="App-footer">
        <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
      </footer>
    )
};

export default Footer;