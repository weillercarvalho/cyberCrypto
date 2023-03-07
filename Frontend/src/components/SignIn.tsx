
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./Context";
import { ContextUserToken } from "./Models";
import { typeSignIn } from "./Models";
import { signin } from "../services/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignIn() {
  const { token } = useContext(userContext) as ContextUserToken;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (typeof token === 'string') {
      navigate("/dashboard")
    }
  }, []);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password.length < 4) {
      return (toast.warn('Password too short!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }))
    }
    const body: typeSignIn = {
      password: password,
      email: email
    }
    signin(body).then(r => {
      console.info(r);
      setEmail("");
      setPassword("");
      navigate("/dashboard")
    }).catch(r => {
      console.error(r);
    })
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
      <ToastContainer />
    </div>
  );
}
