import { Request, Response } from "express";

export async function dashboardController(req: Request, res: Response) {
    return res.sendStatus(200);
}