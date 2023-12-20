import {useContext} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";

import {DataContext} from "../context/DataContext.jsx";
const Orders = () => {

    const { orders: data } = useContext(DataContext);

    return (
        <>
            <NavBar/>
                <div>
                    <Table data={data} type="orders" filter="vendor" criteria="distribuidor"/>
                </div>
            <Footer/>
        </>
    );
};

export default Orders;