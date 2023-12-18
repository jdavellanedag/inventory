import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {useEffect, useState} from "react";
import {getOrderById} from "../utils/dataUtils.js";
import OrderStatus from "../components/OrderStatus.jsx";

const OrderDetails = () => {

    const [order, setOrder] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const orderId = params.orderId;

    useEffect(() => {
        setOrder(getOrderById(orderId));
        if (order){
            setIsLoading(false);
        }
    }, [orderId, order]);

    const handleStatusChange = (status) => {
        console.log(status)
    }

    return (
        <>
            <NavBar />
            {
                !isLoading &&
                <div className="py-10 px-20">
                    <h1 className="text-2xl">Detalles de la orden</h1>
                    <table className="table-auto w-full text-left">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Producto</th>
                            <th>Proveedor</th>
                            <th>Cantidad</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.product_id}</td>
                            <td>{order.vendor}</td>
                            <td>{order.quantity}</td>
                            <td><OrderStatus initial={order.status} onStatusChange={handleStatusChange}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
            <Footer/>
        </>
    );
};

export default OrderDetails;