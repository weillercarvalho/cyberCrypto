import prisma from "../database/db.js";
import { typeSignUp, typeSignInWithId } from "../models/allModels.js";
export async function signUpPost({ email, password, image, btc }: typeSignUp) {
  return await prisma.users.create({
    data: {
      email,
      password,
      imageurl: image,
      btcaddress: btc,
    },
  });
}

export async function hashVerification(email: string) {
  return await prisma.users.findFirst({
    where: {
      email,
    },
  });
}

export async function signInPost({ email, userId, token }: typeSignInWithId) {
  return await prisma.sessions.create({
    data: {
      email,
      userId,
      token,
    },
  });
}
