import "../styles/css/style.min.css";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./Context";
import { ContextUserToken } from "./Context";
export default function SignIn() {
  const { token } = useContext(userContext) as ContextUserToken;
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password.length === 0 || email.length === 0) {
      return;
    }
  }
  return (
    <div className="signinback">
      <div className="principalcontainer">
        <nav className="nav1">
          <img src={image} className="img1" alt="prime" />
          <p className="signinname">CyberCrypto</p>
        </nav>
        <form onSubmit={(e) => handleSubmit(e)} className="form1">
          <TextField
            type="email"
            className="inputs"
            id="filled-basic"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            type="password"
            className="inputs"
            id="filled-basic"
            label="Password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h1 onClick={() => navigate("/signup")} className="h11">
            Don't have an account?
          </h1>
          <button className="button1">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}
