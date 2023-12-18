import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";
import OrderModal from "../components/OrderModal.jsx";
import {createNewOrder, getOrdersByProductId, getProductById} from "../utils/dataUtils.js";

import { MdAddShoppingCart } from "react-icons/md";


const Products = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;

    useEffect(() => {
        setProduct(getProductById(productId));
        setOrdersData(getOrdersByProductId(productId));
        setIsLoading(false);
    }, [productId]);

    const onClick = () => {
        setShowModal(!showModal);
    }

    const handleOrder = (quantity, vendor) => {
        const ordersUpdated = createNewOrder({
            "id": (ordersData.length + 1).toString(),
            "product_id": productId,
            "vendor": vendor,
            "quantity": quantity,
            "status": "PEDIDO"
        });
        setOrdersData(ordersUpdated);
    }

    return (
        <>
            <NavBar />
            <div className="p-8">
                {!isLoading && <div className="flex flex-col gap-y-5 mb-4">
                    <h1 className="text-2xl">Detalles del producto</h1>
                    <hr/>
                    <table className="table-auto w-full text-left">
                        <thead className="text-sm uppercase bg-black-soft text-white">
                        <tr className="[&>*]:px-1 [&>*]:py-3">
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Porcentaje impuesto</th>
                            <th>Disponible</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.tax_percentage}</td>
                            <td>{product.stock}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>}
                <div>
                    <button onClick={onClick} type="button"
                            className="text-bone font-bold bg-blue-light hover:bg-blue-dark rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2">
                        <MdAddShoppingCart className="me-2" size={24}/> Hacer pedido
                    </button>
                    <OrderModal visible={showModal} close={() => setShowModal(false)} callback={handleOrder}/>
                </div>
                {ordersData.length !== 0 && (
                    <div className="flex flex-col mt-10 gap-y-5">
                        <h1 className="text-left text-xl">Ordenes</h1>
                        <hr/>
                        <Table data={ordersData} filter="vendor" criteria="distribuidor" type="orders"/>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Products;