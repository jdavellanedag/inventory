import logo from "../assets/logo.png";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="flex min-h-full p-8 gap-x-4 bg-red">
            <div>
                <img src={logo} alt="Logo de sistema" className="w-20"/>
            </div>
            <div className="flex gap-x-4">
                <NavLink to="/home" className="bg-blue-light font-bold">
                    Inventario
                </NavLink>
                <NavLink to="/orders" >
                    Ordenes
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;