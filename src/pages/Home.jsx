import {useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/products.json";

import SearchBar from "../components/SearchBar.jsx";
import Table from "../components/Table.jsx";

const Home = () => {

    const [filteredProducts, setFilteredProducts] = useState(data.products);

    const fields = Object.keys(data.products.find((e) => e.id !== undefined));

    const onSearchCallback = (searchCriteria) => {
        const filteredItems = data.products.filter((product) =>
            product.name.toLowerCase().includes(searchCriteria.toLowerCase())
        )
        setFilteredProducts(filteredItems)
    }

    console.log(fields);

    return (
        <>
            <NavBar/>
            <dvi className="flex flex-col p-2 gap-y-5">
                <SearchBar callback={onSearchCallback} />
                <div>
                    <Table fields={fields} data={filteredProducts} />
                </div>
            </dvi>
            <Footer/>
        </>
    );
};

export default Home;
