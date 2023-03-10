import { typeSignUp } from "../models/allModels.js";
import { signUpPost } from "../repositorys/signRepository.js";
export async function signUpService({
  email,
  password,
  image,
  btc,
}: typeSignUp) {
  const result = await signUpPost({
    email,
    password,
    image,
    btc,
  });
  return result;
}

export async function signInService() {}
