import {useParams} from "react-router-dom";

const Products = () => {

    const params = useParams();
    const productId = params.productId;

    return (
        <div>
            Producto {productId}
        </div>
    );
};

export default Products;