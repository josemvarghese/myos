import { OrderDto } from '../../../../dto/order.dto';
import { Request, Response } from 'express';
import { OrderDataSource } from '../../../../data/data-sources/postgres/order';
import { OrderRepository } from '../../../../domain/repositories/order.repository';
import { Order } from '../../../../domain/services/order/new-order.service';

/*
? For placing order , customer name, product id, quantity
? There is no shoping cart logic implemented
? we are just saving user request for the order in database
*/

export const placeOrder = async (req: Request, res: Response) => {
    const orderInfo: OrderDto = req.body as OrderDto;
    const orderData: OrderDataSource = new OrderDataSource();
    const orderRepository: OrderRepository = new OrderRepository(orderData);
    const order: Order = new Order(orderRepository);
    const data: any = await order.execute(orderInfo);
    res.statusCode = 200;
    return res.send(data);
}