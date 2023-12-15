import products from "../data/products.json";
import orders from "../data/orders.json";

export const getProducts = () => {
    return products.products;
}

export const getOrders = () => {
    return orders.orders;
}