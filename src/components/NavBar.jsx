import logo from "../assets/logo.png";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex min-h-full p-6 gap-x-4 bg-red">
            <div>
                <img src={logo} alt="Logo de sistema" className="w-20"/>
            </div>
            <div className="flex">
                <NavLink to="/home" className="font-bold m-auto px-4 py-6 hover:border-b-blue-light hover:border-solid hover:border-b-2 text-white">
                    Inventario
                </NavLink>
                <NavLink to="/orders" className="font-bold m-auto px-4 py-6 hover:border-b-blue-light hover:border-solid hover:border-b-2 text-white">
                    Ordenes
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;