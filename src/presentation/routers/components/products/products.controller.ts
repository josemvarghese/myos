import { Request, Response } from 'express';

export const productsPing = async (req: Request, res: Response) => {
    res.statusCode = 200;
    return res.send({ data: "Product ping" });
}