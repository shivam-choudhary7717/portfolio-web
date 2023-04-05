import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// React Fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    // const handleClick = (newRoute) => {
    //     handleRouteChange(newRoute);
    // };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.." /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse flex" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth={true} duration={100} to="home" offset={-110} className="nav-link menu-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="about" offset={-110} className="nav-link menu-link" href="#" >about me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="services" offset={-110} className="nav-link menu-link" href="#">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="experience" offset={-110} className="nav-link menu-link" href="#">experience</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} duration={100} to="portfolio" className="nav-link menu-link" href="#">portfolio</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="testimonials" offset={-110} className="nav-link menu-link" href="#">testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="contacts" offset={-110} className="nav-link menu-link" href="#">contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;