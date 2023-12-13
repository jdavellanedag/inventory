import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Orders from "../pages/Orders.jsx";
import Products from "../pages/Products.jsx";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/products/:productId" element={<Products />} />
                <Route path="*" element={<Navigate to="/Home" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;