import React from "react";
import Typed from "typed.js";
import { Link } from "react-scroll";
import { useEffect } from "react";
const Header = () => {
    useEffect(() => {
        const typed = new Typed('.typed-text', {
            strings: ["NodeJs", "ReactJS", "Web development", "Selenium Testing", "Playwright Testing"],
            typeSpeed: 40,
            backSpeed: 60,
            loop: true,
            showCursor: false
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Full Stack Developer</h1>
                <span className='typed-text'></span>
                <Link
                    smooth={true}
                    duration={100}
                    to="contacts"
                    offset={-110}
                    className="btn-main-offer"
                    href="#"
                >Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;