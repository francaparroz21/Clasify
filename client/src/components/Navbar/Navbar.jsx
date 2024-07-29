import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import {motion} from "framer-motion"

export const Navbar = () => {


    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-left">
                    <div>
                        <Link className="nav-link nav-clasify-home" to={"/"}><h1
                        >Clasify.com</h1></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="options">
                        <ul className="navbar-nav">
                            <NavLink className="nav-link nav-item" to={"/teachers"}>Profesores</NavLink>
                            <NavLink className="nav-link nav-item" to={"/aboutus"}>Nosotros</NavLink>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#options">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-right">
                    <Link className="nav-link" to={"/"}><span className="aboutus">Nosotros</span></Link>
                    <Link className="nav-link" to={"/"}><button className="btn btn-light btn-login">Entrar</button></Link>
                    <Link className="nav-link" to={"/"}><button className="btn btn-light btn-signup">Registrarse</button></Link>
                </div>
            </nav>
        </header>
    );
}