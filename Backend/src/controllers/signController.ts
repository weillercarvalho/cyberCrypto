import { Request, Response } from "express";
import { signUpService, signInService } from "../services/signService.js";

export async function signUpController(req: Request, res: Response) {
  const email: string = res.locals.email;
  const password: string = res.locals.password;
  const image: string = res.locals.image;
  const btc: string = res.locals.btc;

  try {
    await signUpService({ email, password, image, btc });
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(`message: ${error}`);
  }
}

export async function signInController(req: Request, res: Response) {
  const email: string = res.locals.email;
  const password: string = res.locals.password;
  try {
    const result = await signInService({ email, password});
    return res.status(201).send({token: result});
  } catch (error) {
    return res.status(500).send(`message: ${error}`);
  }
}