import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Orders from "../pages/Orders.jsx";
import Products from "../pages/Products.jsx";
import OrderDetails from "../pages/OrderDetails.jsx";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products/:productId" element={<Products />} />
                <Route path="/orders/:orderId" element={<OrderDetails />} />
                <Route path="*" element={<Navigate to="/Home" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;