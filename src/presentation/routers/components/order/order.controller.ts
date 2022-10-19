import { Request, Response } from 'express';

export const orderPing = async (req: Request, res: Response) => {
    res.statusCode = 200;
    return res.send({ data: "Order ping" });
}