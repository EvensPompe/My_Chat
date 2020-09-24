import { Request, Response } from 'express';

export async function getHome(req: Request, res: Response) {
    res.status(200).json("Home");
}