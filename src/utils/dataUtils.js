import products from "../data/products.json";
import orders from "../data/orders.json";

export const getProducts = () => {
    return products.products;
}

export const getOrders = () => {
    return orders.orders;
}

export const getProductById = (productId) => {
    return getProducts().find((product) => product.id === productId);
}

export const getOrdersByProductId = (productId) => {
    return getOrders().filter((order) => order.product_id === productId);
}

export const createNewOrder = (order) => {
    const result = getOrdersByProductId(order.product_id);
    result.push(order);
    return result;
}