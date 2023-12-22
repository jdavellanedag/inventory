import {useContext, useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import ProductModal from "../components/ProductModal.jsx";
import Table from "../components/Table.jsx";

import {DataContext} from "../context/DataContext.jsx";

import { BsDatabaseFillAdd } from "react-icons/bs";

const Home = () => {

    const { data } = useContext(DataContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <NavBar/>
            <div className="flex flex-col gap-y-5 py-3 px-10">
                <button onClick={() => setShowModal(true)} type="button"
                        className="text-bone font-bold bg-blue-light hover:bg-blue-dark rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2">
                    <BsDatabaseFillAdd className="me-2" size={24}/> Crear producto
                </button>
                <ProductModal visible={showModal} close={() => setShowModal(false)}/>
                <Table data={data.products} type="products" filter="name" criteria="nombre"/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
