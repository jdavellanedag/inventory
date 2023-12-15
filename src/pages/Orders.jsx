import {useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Table from "../components/Table.jsx";

import data from "../data/orders.json";

const Orders = () => {

    const [filteredOrdes, setFilteredOrdes] = useState(data.orders);
    const fields = Object.keys(data.orders.find((e) => e.id !== undefined));

    const onSearchCallBack = (searchCriteria) => {
        const filteredItems = data.orders.filter((order) =>
            order.vendor.toLowerCase().includes(searchCriteria.toLowerCase())
        )
        setFilteredOrdes(filteredItems);
    }

    return (
        <>
            <NavBar/>
            <div className="flex flex-col p-2 gap-y-5">
                <SearchBar callback={onSearchCallBack}/>
                <div>
                    <Table fields={fields} data={filteredOrdes} />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Orders;