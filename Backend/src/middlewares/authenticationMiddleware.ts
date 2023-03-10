import { Request, Response, NextFunction } from "express";
import { typeSignUp } from "../models/allModels";
export async function signUpMiddleware(req: Request, res: Response, next:NextFunction){
    const {email, image, password, btc} = req.body as typeSignUp;
    try {
        if (!email || !image || !password) {
            throw new Error("Error in the line 6 from Middleware signUp.")
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
        next();
    } catch (error) {
        throw new Error("message:", {cause: error})
    }
}