import { typeSignUp, typeSignIn } from "../models/allModels.js";
import { signUpPost, hashVerification } from "../repositorys/signRepository.js";
import bcrypt from "bcrypt";

export async function signUpService({
  email,
  password,
  image,
  btc,
}: typeSignUp) {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const result = await signUpPost({
    email,
    password: hashedPassword,
    image,
    btc,
  });
  return result;
}

export async function signInService({email, password}: typeSignIn) {
  const getHashed = await hashVerification(email);
  if (!getHashed) {
    throw new Error("Email not found!")
  }
  const comparePassword = bcrypt.compareSync(password, getHashed.password)
  if (!comparePassword) {
    throw new Error("Wrong password!")
  }

}
