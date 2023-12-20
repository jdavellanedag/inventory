import {createContext, useEffect, useState} from "react";
import {getOrders, getProducts} from "../utils/dataUtils.js";

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const products = getProducts();
        const orders = getOrders();
        setData({products, orders});
        setIsLoading(false);
    }, []);

    return (
        <DataContext.Provider value={data}>
            { !isLoading && children}
        </DataContext.Provider>
    )
}