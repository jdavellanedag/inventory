import {useEffect, useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";

import {getOrders} from "../utils/dataUtils.js";
const Orders = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getOrders());
        setIsLoading(false)
    }, []);

    return (
        <>
            <NavBar/>
                <div>
                    {!isLoading && <Table data={data} type="orders" filter="vendor" criteria="distribuidor"/>}
                </div>
            <Footer/>
        </>
    );
};

export default Orders;