import {FiSearch} from "react-icons/fi";
import {useEffect} from "react";
import {useInputField} from "../hooks/useInputField.jsx";

const SearchBar = ({callback: onSearchCallback, criteria}) => {

    const [searchCriteria, handleSearch] = useInputField("");

    useEffect(() => {
        onSearchCallback(searchCriteria);
    }, [searchCriteria]);

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