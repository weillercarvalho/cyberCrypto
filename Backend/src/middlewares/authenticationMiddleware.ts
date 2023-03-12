import { Request, Response, NextFunction } from "express";
import { typeSignUp, typeSignIn } from "../models/allModels.js";
import {
  signUpTypeSchema,
  signUpSchema,
  signInSchema,
  signInTypeSchema,
} from "../schemas/authSchema.js";
export async function signUpMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, image, password, btc } = req.body as typeSignUp;
  try {
    if (!email || !image || !password) {
      throw new Error("Error in the line 11 from Middleware signUp.");
    }
    res.locals.email = email;
    res.locals.image = image;
    res.locals.password = password;
    if (btc === undefined) {
      res.locals.btc = "";
    }
    if (btc !== undefined) {
      res.locals.btc = btc;
    }
    const data: signUpTypeSchema = {
      email: res.locals.email,
      image: res.locals.image,
      password: res.locals.password,
      btc: res.locals.btc,
    };
    signUpSchema.parse(data);
    next();
  } catch (error) {
    throw new Error("message:", { cause: error });
  }
}

export async function signInMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body as typeSignIn;
  try {
    if (!email || !password) {
      throw new Error("Error in the line 49 from Middleware signIn.");
    }
    res.locals.email = email;
    res.locals.password = password;
    const data: signInTypeSchema = {
      email: res.locals.email,
      password: res.locals.password,
    };
    signInSchema.parse(data);
    next();
  } catch (error) {
    throw new Error("message:", { cause: error });
  }
}
