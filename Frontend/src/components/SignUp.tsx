import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./Context";
import { ContextUserToken } from "./Models";
import { typeSignUp } from "./Models";
import { signin } from "../services/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const { token } = useContext(userContext) as ContextUserToken;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [btc, setBtc] = useState("");
  useEffect(() => {
    if (typeof token === "string") {
      navigate("/dashboard");
    }
  }, []);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password.length < 4) {
      return toast.warn("Password too short!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (btc === "") {
      const body: typeSignUp = {
        password: password,
        email: email,
        image: imageurl
      };
      signin(body)
        .then((r) => {
          console.info(r);
          setEmail("");
          setPassword("");
          navigate("/signin");
        })
        .catch((r) => {
          console.error(r);
        });
    }
    if (btc !== "") {
      const body: typeSignUp = {
        password: password,
        email: email,
        image: imageurl,
        btc: btc,
      };
      signin(body)
        .then((r) => {
          console.info(r);
          setEmail("");
          setPassword("");
          setBtc("");
          navigate("/signin");
        })
        .catch((r) => {
          console.error(r);
        });
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
          <TextField
            type="text"
            className="inputs"
            id="filled-basic"
            label="BTC Address (Optional)"
            variant="filled"
            value={btc}
            onChange={(e) => setBtc(e.target.value)}
          />
          <TextField
            type="text"
            className="inputs"
            id="filled-basic"
            label="Image URL"
            variant="filled"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
            required
          />
          <h1 onClick={() => navigate("/signin")} className="h11">
            Already have an account?
          </h1>
          <button className="button1">SIGN UP</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
