import axios from "axios";

const BASE_URL = `localhost:5000`;

function header() {
  const auth = JSON.parse(localStorage.getItem(`crypto`) ?? "{}");
  if (auth === "{}") {
    throw new Error("Empty token!");
  } else {
    const header = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    return header;
  }
}

function signin(body: object) {
  const promise = axios.post(`${BASE_URL}/api/signin`, body);
  return promise;
}

function signup(body: object) {
  const promise = axios.post(`${BASE_URL}/api/signup`, body);
}

function dashboard() {
  const auth = header();
  const promise = axios.get(`${BASE_URL}/api/dashboard`, auth);
  return promise;
}

function deposit(body: object) {
  const auth = header();
  const promise = axios.post(`${BASE_URL}/api/deposit`, body, auth);
}

function withdraw(body: object) {
  const auth = header();
  const promise = axios.post(`${BASE_URL}/api/withdraw`, body, auth);
}

export {signin, signup, dashboard, deposit, withdraw}