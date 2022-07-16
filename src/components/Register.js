import './Login.css';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if(validator.isEmail(email)) {
      console.log("Validated");
      axios.post("http://localhost:8080/users/register", {email, password, name})
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
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
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
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
