import {Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import {useLoadData} from "../hooks/useLoadData.jsx";

const Table = ({data, type, filter, criteria}) => {

    const {fields, onSearchCallBack, filteredData} = useLoadData(data, filter);

    return (
        <div className="flex flex-col p-2 gap-y-5">
            <SearchBar callback={onSearchCallBack} criteria={criteria}/>
            <div>
                <table className="w-full text-left text-sm">
                    <thead className="text-xs uppercase bg-black-soft text-white">
                        <tr>
                            {
                                fields.map( (field, i) => <th scope="col" className="px-6 py-3" key={i}>{field}</th> )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((element) => <tr className="border-b" key={element.id}>
                                {Object.keys(element).map(
                                    (attr, i) => <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap" key={i}>
                                        { attr === "id" ?
                                            <Link className="text-blue-light" to={`/${type}/${element[attr]}`}>{element[attr]}</Link>
                                            : element[attr]
                                        }
                                    </th>
                                )}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;