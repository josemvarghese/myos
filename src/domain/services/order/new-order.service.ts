import { OrderDto } from "../../../dto/order.dto";
import { IOrderRepository } from "../../../domain/interface/repositories/order-repository";
import { INewOrder } from "../../../domain/interface/services/order.service";
import { IResponse } from "../../../dto/common.dto";

export class Order implements INewOrder {
    private orderRepository: IOrderRepository;

    constructor(orderRepository: IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderInfo: OrderDto): Promise<IResponse> {
        return await this.orderRepository.placeNewOrder(orderInfo);
    }
}