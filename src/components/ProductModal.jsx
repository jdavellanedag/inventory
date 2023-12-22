import {useContext} from 'react';

import {useInputField} from "../hooks/useInputField.jsx";

import { BsDatabaseFillAdd } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import {DataContext} from "../context/DataContext.jsx";
import {createProduct} from "../utils/dataUtils.js";


const ProductModal = ({visible, close}) => {

    const {data, setData} = useContext(DataContext);

    const [name, handleProductName ] = useInputField("");
    const [price, handlePrice ] = useInputField(0);
    const [taxes, handleTaxes ] = useInputField(0);

    const handleConfirmation = () => {
        const products = createProduct({name, price, taxes});
        setData({products: products, orders: data.orders});
        close();
    }

    return visible && (
        <div onClick={() => close()} className="fixed top-0 bottom-0 left-0 right-0 bg-black-soft/60 w-full h-full flex items-center justify-center z-20">
            <div className="bg-bone w-96 h-60 flex flex-col place-content-evenly items-center rounded-lg"
                 onClick={(e) => e.stopPropagation()}>
                <p>Hacer pedido</p>
                <input onChange={handleProductName} type="text" placeholder="Nombre de producto"
                       className="px-5 py-2.5"/>
                <input onChange={handlePrice} type="number" placeholder="Precio" className="px-5 py-2.5"/>
                <input onChange={handleTaxes} type="number" placeholder="Porcentaje impuesto" className="px-5 py-2.5"/>
                <div className="flex gap-x-10">
                    <button onClick={() => close()}
                            className="bg-red px-5 py-2.5 text-bone rounded-lg inline-flex items-center me-2">
                        <TiCancel size={24}/> Cancelar
                    </button>
                    <button onClick={handleConfirmation}
                            className="bg-blue-dark px-5 py-2.5 text-bone rounded-lg inline-flex items-center me-2">
                        <BsDatabaseFillAdd size={24}/> Crear
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductModal;