import products from "../data/products.json";
import orders from "../data/orders.json";

export const getProducts = () => {
    return products.products;
}

export const getProductById = (productId) => {
    return getProducts().find((product) => product.id === productId);
}

export const updateProductStockById = (productId, quantity) => {
    const product = getProductById(productId);
    product.stock = product.stock + quantity;
}

export const createNewOrder = (order) => {
    const result = getOrdersByProductId(order.product_id);
    result.push({id: orders.orders.length + 1, ...order});
    return result;
}

export const getOrders = () => {
    return orders.orders;
}

export const getOrderById = (orderId) => {
    return getOrders().find(order => order.id === orderId);
}

export const updateOrderStatus = (orderId, status) => {
    const order = getOrderById(orderId);
    order.status = status;
    return order;
}

export const getOrdersByProductId = (productId) => {
    return getOrders().filter((order) => order.product_id === productId);
}