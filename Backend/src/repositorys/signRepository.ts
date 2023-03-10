import prisma from "../database/db.js";
import { typeSignUp } from "../models/allModels.js";
export async function signUpPost({ email, password, image, btc }: typeSignUp) {
  return await prisma.users.create({
    data: {
      email: email,
      password: password,
      imageurl: image,
      btcaddress: btc
    },
  });
}
