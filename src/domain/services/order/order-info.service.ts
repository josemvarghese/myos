import { IOrderRepository } from "../../interface/repositories/order-repository";
import { IProductOrder } from "../../interface/services/order.service";
import { IResponse } from "../../../dto/common.dto";

export class OrderInfo implements IProductOrder {
    private orderRepository: IOrderRepository;

    constructor(orderRepository: IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderId:string): Promise<IResponse> {
        return await this.orderRepository.productOrder(orderId);
    }
}