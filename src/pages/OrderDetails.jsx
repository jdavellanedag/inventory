import {useParams} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const OrderDetails = () => {
    const params = useParams();
    const orderId = params.orderId;

    return (
        <>
            <NavBar />
            <div>
                Order {orderId}
            </div>
            <Footer />
        </>
    );
};

export default OrderDetails;