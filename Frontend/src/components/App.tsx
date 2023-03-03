import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState("");
  const auth = JSON.parse(localStorage.getItem(`crypto`) ?? '{}'); // Operador de coalescencia nula nao surtiu efeito, nem ternario, nem verificacao com type of e nem operador de not null, sendo assim vai por bem ou por mal.
  if (auth !== '{}' && token === "") {
    return setToken(auth);
  }
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
