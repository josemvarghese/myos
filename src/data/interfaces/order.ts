import { OrderDto } from "../../dto/order.dto";
import { IResponse } from "../../dto/common.dto";

export interface IOrder {
    placeOrder(orderInfo: OrderDto): Promise<IResponse>;
}