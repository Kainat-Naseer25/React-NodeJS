import { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <Link to="/contacts">
<button type="submit" className="btn btn-primary">Submit</button>
</Link>
        </form>
      </div>
    )
  }
}
