import {useState} from "react";

import data from "../data/status.json";

const OrderStatus = ({initial, onStatusChange}) => {

    const [statuses] = useState(data.status);
    const handleSelection = (e) => {
        onStatusChange(e.target.value);
    }

    return (
        <select defaultValue={initial} onChange={handleSelection}>
            {
                statuses.map( (status, i) => <option key={i} value={status}>{status}</option>)
            }
        </select>
    );
};

export default OrderStatus;