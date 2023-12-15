import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Products = () => {

    const params = useParams();
    const productId = params.productId;

    return (
        <>
            <NavBar />
            <div>
                Producto {productId}
            </div>
            <Footer />
        </>
    );
};

export default Products;