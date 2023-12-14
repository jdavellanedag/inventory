import {useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import data from "../data/products.json";

import SearchBar from "../components/SearchBar.jsx";

const Home = () => {

    const [filteredProducts, setFilteredProducts] = useState(data.products);

    const onSearchCallback = (searchCriteria) => {
        const filteredItems = data.products.filter((product) =>
            product.name.toLowerCase().includes(searchCriteria.toLowerCase())
        )
        setFilteredProducts(filteredItems)
    }

    return (
        <>
            <NavBar/>
            <main className="flex flex-col p-2 gap-y-5">
                <SearchBar callback={onSearchCallback} />
                <div>
                    {
                        filteredProducts.map(({id, name}) => <p key={id}>{name}</p>)
                    }
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
