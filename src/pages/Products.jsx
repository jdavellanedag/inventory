import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";
import {getOrdersByProductId, getProductById} from "../utils/dataUtils.js";

import { MdAddShoppingCart } from "react-icons/md";


const Products = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({});
    const params = useParams();
    const productId = params.productId;

    useEffect(() => {
        setProduct(getProductById(productId));
        setOrdersData(getOrdersByProductId(productId));
        setIsLoading(false);
    }, [productId]);

    const onClick = () => {
        console.log("This will show a modal with add stock options WIP :)")
        const newOrder = {
                "id": "10",
                "product_id": "9134431A-C9D5-C77C-589D-546C6822E5A0",
                "vendor": "Suministros SA",
                "quantity": "10",
                "status": "PEDIDO"
        };
        // TODO: This is not refreshing the table automatically,
        // the change happens only after reload the filtered data while searching
        setOrdersData([...ordersData, newOrder]);
    }

    return (
        <>
            <NavBar />
            <div className="p-8">
                {!isLoading && <div>Producto: {product.name}</div>}
                <div>
                    <button onClick={onClick} type="button" className="text-bone font-bold bg-blue-light hover:bg-blue-dark rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2">
                       <MdAddShoppingCart className="me-2" size={24}/> Hacer pedido
                    </button>
                </div>
                {ordersData.length !== 0 && (
                    <div className="flex flex-col p-2">
                        <div className="font-bold text-center">
                            <p>Ordenes</p>
                        </div>
                        <Table data={ordersData} filter="vendor" criteria="distribuidor" type="orders" />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Products;