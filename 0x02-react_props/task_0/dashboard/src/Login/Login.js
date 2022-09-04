import React from 'react';

function Login() {
    return (
            <body className="App-body">
              <p>Login to access the full dashboard</p>
              <label for="e-mail"> Email </label>
              <input type="email" id="e-mail"/>
              <label for="pass"> Password </label>
              <input type="password" id="pass"/> 
              <input type="button" value="OK"/>
            </body>
    )
};

export default Login;