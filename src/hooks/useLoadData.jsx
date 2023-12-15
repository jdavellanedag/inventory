import {useState} from "react";

export const useLoadData = (data, type, filter) => {

    const [filteredData, setFilteredData] = useState(data[type]);

    const fields = Object.keys(data[type].find((e) => e.id !== undefined));

    const onSearchCallBack = (searchCriteria) => {
        const filteredItems = data[type].filter((element) =>
            element[filter].toLowerCase().includes(searchCriteria.toLowerCase())
        )
        setFilteredData(filteredItems);
    }

    return {
        fields,
        onSearchCallBack,
        filteredData
    }

}