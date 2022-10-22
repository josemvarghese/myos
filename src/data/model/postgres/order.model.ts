import sequelizeConnection from '../../../config/postgresdb';
import { DataTypes, ModelDefined, Optional, UUIDV4 } from 'sequelize';
export interface IOrder {
    id?: string;
    productId: string;
    orderBy: string;
    quantity: number;
    orderConfirmed: boolean;
}
export type OrderCreation = Optional<IOrder, 'id'>

export const OrderModel: ModelDefined<
    IOrder,
    OrderCreation> = sequelizeConnection.define('Order', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        productId: {
            type: DataTypes.UUID,
            field: 'product_id'
        },
        orderBy: {
            type: DataTypes.STRING,
            field: 'order_by'
        },
        quantity: {
            type: DataTypes.INTEGER,
            field: 'quantity'
        },
        orderConfirmed: {
            type: DataTypes.BOOLEAN,
            field: 'order_confirmed',
            defaultValue: false
        },
    }
    );