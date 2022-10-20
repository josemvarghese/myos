import { OrderDto } from "../../../dto/order.dto";
import { IResponse } from "../../../dto/common.dto";

export interface INewOrder {
    execute(orderInfo: OrderDto): Promise<IResponse>;
}