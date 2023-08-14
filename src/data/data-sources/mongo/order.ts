import { IResponse } from '../../../dto/common.dto';
import OrderModel from '../../../data/model/mongo/order.model';
import { IOrder } from '../../../data/interfaces/order';
import { OrderDto } from '../../../dto/order.dto';
import mongoose from 'mongoose';
export class OrderDataSource implements IOrder {

    async placeOrder(orderData: OrderDto): Promise<IResponse> {
        try {
            const orderInfo = new OrderModel(orderData)
            const data = await orderInfo.save();
            const resData: IResponse = { status: true, message: "Your order placed sucessfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }

    async productOrder(orderId: string): Promise<IResponse> {
        try {
            const data = await OrderModel.aggregate([{
                $match: {
                    _id: new mongoose.Types.ObjectId(orderId)
                },
            },
            {
                "$lookup": {
                    from: "product",
                    localField: "productId",
                    foreignField: "_id",
                    as: 'product'
                }
            },
            {
                $unwind: "$product"
            },
            {
                '$project': {
                    id: "$_id",
                    _id:0,
                    "productId": 1,
                    "quantity": 1,
                    "orderBy": 1,
                    "orderConfirmed": 1,
                    "title": "$product.title",
                    "description": "$product.description",
                    "pictureUrl": "$product.pictureUrl",
                    "price": "$product.price",
                    "totalQuantity": "$product.quantity",
                    "status": "$product.status"
                }
            }
            ]);

            const resData: IResponse = { status: true, message: "Your order ", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }

}