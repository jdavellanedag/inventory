import {useContext} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";

import {DataContext} from "../context/DataContext.jsx";
const Orders = () => {

    const { data } = useContext(DataContext);

    return (
        <>
            <NavBar/>
                <div className="py-3 px-10">
                    <Table data={data.orders} type="orders" filter="vendor" criteria="distribuidor"/>
                </div>
            <Footer/>
        </>
    );
};

export default Orders;