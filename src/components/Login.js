import { useState } from 'react';
import './Login.css';
import validator from 'validator';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(validator.isEmail(email)) {
      console.log("Validated");
      axios.post("http://localhost:8080/users/login", {email, password})
      .then((res) => {
        console.log("Success");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  return (
    <div className="form-div">
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={onSubmit}>
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
      </form>
    </div>
  );
}

export default Login;
