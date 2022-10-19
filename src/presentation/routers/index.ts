import order from './components/order';
import product from './components/products';
export const routes = (app: any, apiVersion: string) => {
    app.use(`${apiVersion}/product`, product);
    app.use(`${apiVersion}/order`, order);
};