import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-jus-loco-980x239.png";
import "./index.scss";

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);
    const desktopResolution = windowWidth > 720;

    const toggleBurger = () => {
        setIsOpen((prevState) => !prevState);
    };

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };
    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    console.log("isOpen " + isOpen);

    return (
        <header className="header_container">
            {isOpen && (
                <div
                    className="header_overlay"
                    onClick={() => toggleBurger()}
                ></div>
            )}

            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img src={logo} alt="Logo JusLoco" />
                </Link>
                {desktopResolution ? (
                    <ul className="inside-nav">
                        <li className="inside-nav_item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/#about">About</Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/services">Prestations</Link>
                        </li>
                        <li className="inside-nav_item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                ) : (
                    <>
                        <ul
                            className={`small-menu_container ${
                                isOpen ? "open" : ""
                            }`}
                        >
                            <li className="inside-nav_item">
                                <Link to="/" onClick={() => toggleBurger()}>
                                    Home
                                </Link>
                            </li>
                            <li className="inside-nav_item">
                                <Link
                                    to="/#about"
                                    onClick={() => toggleBurger()}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="inside-nav_item">
                                <Link
                                    to="/services"
                                    onClick={() => toggleBurger()}
                                >
                                    Prestations
                                </Link>
                            </li>
                            <li className="inside-nav_item">
                                <Link
                                    to="/contact"
                                    onClick={() => toggleBurger()}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div
                            className="burger_container"
                            onClick={() => toggleBurger()}
                        >
                            <div className="burger_item"></div>
                            <div className="burger_item"></div>
                            <div className="burger_item"></div>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
