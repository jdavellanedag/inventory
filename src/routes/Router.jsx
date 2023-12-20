import {createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Orders from "../pages/Orders.jsx";
import Products from "../pages/Products.jsx";
import OrderDetails from "../pages/OrderDetails.jsx";


const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/orders",
        element: <Orders />
    },
    {
        path: "/products/:productId",
        element: <Products />
    },
    {
        path: "/orders/:orderId",
        element: <OrderDetails />
    },
    {
        path: "*",
        element: <Navigate to="/home" replace />
    }
])

export default router;