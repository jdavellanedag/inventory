import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/products.json";

import Table from "../components/Table.jsx";

const Home = () => {

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
