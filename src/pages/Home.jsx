import {useEffect, useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import Table from "../components/Table.jsx";
import {getProducts} from "../utils/dataUtils.js";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(getProducts());
        setIsLoading(false)
    }, []);

    return (
        <>
            <NavBar/>
            <div>
                { !isLoading && <Table data={data} type="products" filter="name" criteria="nombre"/>}
            </div>
            <Footer/>
        </>
    );
};

export default Home;
