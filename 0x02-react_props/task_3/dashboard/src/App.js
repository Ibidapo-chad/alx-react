import logo from './Holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} alt="logo"/>
       <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="e-mail"> Email </label>
        <input type="email" id="e-mail"/>
        <label for="pass"> Password </label>
        <input type="password" id="pass"/> 
        <input type="button" value="OK"/>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
