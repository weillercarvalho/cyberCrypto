import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
import { userContext } from "./Context";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState(undefined);
  const auth = JSON.parse(localStorage.getItem(`crypto`) ?? "{}");
  if (auth !== "{}" && token === undefined) {
    return setToken(auth);
  }
  return (
    <userContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
