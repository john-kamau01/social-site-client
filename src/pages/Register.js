import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("https://social-site-server-pearl.vercel.app/register", {
        username: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        // navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <h3 className="mb-4">Register</h3>

          <form
            onSubmit={handleSubmit}
            className="border border-1 rounded p-3 mb-3"
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="user@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <p className="f-small">
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="col-md-6 col-xs-12"></div>
      </div>
    </div>
  );
};
export default Register;
