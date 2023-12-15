import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Table from "../components/Table.jsx";

import data from "../data/orders.json";
const Orders = () => {

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