import {useContext} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import Table from "../components/Table.jsx";
import {DataContext} from "../context/DataContext.jsx";

const Home = () => {

    const { products: data } = useContext(DataContext);

    return (
        <>
            <NavBar/>
            <div>
                <Table data={data} type="products" filter="name" criteria="nombre"/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
