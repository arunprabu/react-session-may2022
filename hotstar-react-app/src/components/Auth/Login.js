import React, { useState } from 'react'

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  // we are working with fake backend. 
  // the following data is needed for us to login properly
  const loginData = { // you may need to stringify if it is a form data
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://reqres.in/api/login", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      })
      .then( (res) => {
        console.log(res);
        return res.json();
      })
      .then( (authData ) => {
        console.log(authData);
        setToken(authData.token);
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      })
  }

  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login