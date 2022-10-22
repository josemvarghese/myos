import sequelizeConnection from '../../../config/postgresdb';
import { DataTypes, ModelDefined, Optional, UUIDV4 } from 'sequelize';
import { OrderModel } from './order.model';
export interface IProduct {
    id?: string;
    title: string;
    description: string;
    pictureUrl: string;
    price: number;
    quantity: number;
    status: boolean;
}

export type ProductCreation = Optional<IProduct, 'id'>

export const ProductModel: ModelDefined<
    IProduct,
    ProductCreation> = sequelizeConnection.define('Product', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        title: {
            type: DataTypes.STRING,
            field: 'title'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        pictureUrl: {
            type: DataTypes.STRING,
            field: 'picture_url'
        },
        price: {
            type: DataTypes.INTEGER,
            field: 'price'
        },
        quantity: {
            type: DataTypes.INTEGER,
            field: 'quantity'
        },
        status: {
            type: DataTypes.BOOLEAN,
            field: 'status',
            defaultValue: true
        },
    }
    );

ProductModel.hasMany(OrderModel, { foreignKey: 'product_id' });