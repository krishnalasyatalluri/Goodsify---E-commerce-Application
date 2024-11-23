import {React, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6023/user/register", {
        email,
        username,
        password,
      });
      toast.success("Registration successful");
      setEmail("");
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      toast.error("Internal server error. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <ToastContainer />
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Register</button>
        </form>
        <p className="already">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="login-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;