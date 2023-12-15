import {FiSearch} from "react-icons/fi";
import {useState} from "react";

const SearchBar = ({callback: onSearchCallback, criteria}) => {

    const [searchCriteria, setSearchCriteria] = useState("");

    const handleSearch = (e) => {
        const searchItem = e.target.value;
        setSearchCriteria(searchItem);

        onSearchCallback(searchItem);
    }

    return (
        <div>
            <label htmlFor="search" className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FiSearch />
                </span>
                <input onChange={handleSearch} value={searchCriteria} type="text" placeholder={`Buscar por ${criteria}...`}
                       name="search"
                       className="placeholder:italic block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 sm:text-sm focus:outline-none" />
            </label>
        </div>
    );
};

export default SearchBar;