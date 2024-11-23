import {React, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:6023/user/login", {
          email,
          password,
        });
        console.log(response.data);
        localStorage.setItem("grocery-token", response.data.token);
        localStorage.setItem("grocery-userId", response.data.id);
        toast.success("Login successful!");
        navigate("/dashboard");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Invalid credentials. Please check your email and password.");
        } else if (error.response) {
          toast.error(
            `Login failed: ${
              error.response.data.message || "An unexpected error occurred."
            }`
          );
        } else {
          toast.error("Login failed: Unable to connect to the server.");
        }
      }
      setEmail("");
      setPassword("");
    };
  
    return (
      <div className="login-page">
        <ToastContainer />
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="register-link">
              Register here
            </span>
          </p>
        </div>
      </div>
    );
  };
  
  export default LoginPage;