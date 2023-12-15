import {useState} from "react";

export const useLoadData = (data, filter) => {

    const [filteredData, setFilteredData] = useState(data);

    const fields = Object.keys(data[0]);

    const onSearchCallBack = (searchCriteria) => {
        const filteredItems = data.filter((element) =>
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