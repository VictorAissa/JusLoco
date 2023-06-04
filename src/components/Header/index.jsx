import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo-jus-loco-980x239.png";
import "./index.scss";

function Header() {
    return (
        <header className="header_container">
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img src={logo} alt="Logo JusLoco" />
                </Link>
                <div className="inside-nav">
                    {/* <ScrollLink
                        onClick={redirect()}
                        className="main-nav-item"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                    >
                        <span>About</span>
                    </ScrollLink> */}
                    <Link to="/#about" className="main-nav-item">
                        <span>About</span>
                    </Link>
                    <Link to="/services" className="main-nav-item">
                        <span>Prestations</span>
                    </Link>
                    <Link to="/contact" className="main-nav-item">
                        <span>Contact</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
