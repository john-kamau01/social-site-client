import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/login", {
        email: email,
        password: password,
      });

      if (response.data.error) {
        setErrorMessage(response?.data.message);
      } else {
        setErrorMessage("");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <h3 className="mb-3">Log In</h3>

          <form
            onSubmit={handleSubmit}
            className="border border-1 rounded p-5 mb-3"
          >
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

            <button type="submit" className="btn btn-primary">
              Login
            </button>

            <p className="text-danger mt-3">{errorMessage}</p>
          </form>

          <p>
            Dont have an account? <Link to="/register">Register</Link>
          </p>
        </div>

        <div className="col-md-6 col-xs-12"></div>
      </div>
    </div>
  );
};
export default Login;
