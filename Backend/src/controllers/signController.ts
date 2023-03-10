import { Request, Response } from "express";
import { signUpService } from "../services/signService.js";

export async function signInController(req: Request, res: Response) {
  return res.sendStatus(200);
}

export async function signUpController(req: Request, res: Response) {
  const email: string = res.locals.email;
  const password: string = res.locals.password;
  const image: string = res.locals.image;
  const btc: string = res.locals.btc;

  try {
    await signUpService({ email, password, image, btc });
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).send(`message: ${error}`);
  }
}
