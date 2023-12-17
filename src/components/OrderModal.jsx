import { TiCancel } from "react-icons/ti";
import { MdAddShoppingCart } from "react-icons/md";
import {useInputField} from "../hooks/useInputField.jsx";

const OrderModal = ({visible, close, callback}) => {

    const [order, handleOrderValue] = useInputField(0);
    const [vendor, handleVendorValue] = useInputField("");

    const  handleConfirmation = () => {
        if (order > 0 && vendor !== "") {
            close();
            callback(order, vendor);
        }
    }

    return visible && (
        <div onClick={() => close()} className="fixed top-0 bottom-0 left-0 right-0 bg-black-soft/60 w-full h-full flex items-center justify-center z-20">
            <div className="bg-bone w-96 h-60 flex flex-col place-content-evenly items-center rounded-lg" onClick={(e) => e.stopPropagation()}>
                <p>Hacer pedido</p>
                <input  onChange={handleVendorValue} type="text" placeholder="Introduzca distribuidor..." className="px-5 py-2.5"/>
                <input onChange={handleOrderValue} type="number" placeholder="Cantidad a pedir" className="px-5 py-2.5"/>
                <div className="flex gap-x-10">
                    <button onClick={() => close()} className="bg-red px-5 py-2.5 text-bone rounded-lg inline-flex items-center me-2">
                        <TiCancel size={24}/> Cancelar
                    </button>
                    <button onClick={handleConfirmation} className="bg-blue-dark px-5 py-2.5 text-bone rounded-lg inline-flex items-center me-2">
                        <MdAddShoppingCart size={24}/> Pedir
                    </button>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;