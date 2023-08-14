import { OrderDto } from "../../../dto/order.dto";
import { IResponse } from "../../../dto/common.dto";

export interface INewOrder {
    execute(orderInfo: OrderDto): Promise<IResponse>;
}
export interface IProductOrder {
    execute(orderId: string): Promise<IResponse>;
}