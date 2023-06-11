import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Modal from "../Modal";
import DropMenu from "../DropMenu";
// import logoFb from "../../assets/logos/logo_facebook.png";
// import logoIg from "../../assets/logos/logo_instagram.png";
// import logoMail from "../../assets/logos/logo_mail.png";
// import logoPhone from "../../assets/logos/logo_smartphone.png";
// import logoLinkedin from "../../assets/logos/logo_liknkedin.png";

function Footer() {
    const [modalOpen, setModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const fbUrl = "https://www.facebook.com/people/Joohn-Doe";
    const linkedinUrl = "https://www.linkedin.com/in/john-doe";
    const desktopResolution = windowWidth > 720;

    const toggleModal = () => {
        modalOpen ? setModalOpen(false) : setModalOpen(true);
    };
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };
    // const toggleModal = () => {
    //     setModalOpen((prevState) => !prevState);
    // };

    return (
        <footer className="footer_container">
            <Modal
                isOpen={modalOpen}
                toggle={toggleModal}
                title={"Contact"}
                description={
                    <div className="centered-text-content">
                        John Doe <br />
                        06 06 06 06 06 <br />
                        john.doe@jusloco.fr
                    </div>
                }
            />
            {desktopResolution ? (
                <div className="social">
                    <Link to="/contact">
                        <i className="fa-solid fa-paper-plane"></i>
                    </Link>
                    <button onClick={toggleModal}>
                        <i className="fa-solid fa-phone"></i>
                    </button>
                    <Link to={fbUrl} target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to={linkedinUrl} target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                </div>
            ) : (
                <div className="social-shortcut">
                    <i
                        class="fa-solid fa-hashtag"
                        onClick={() => toggleMenu()}
                    ></i>
                    <DropMenu
                        isOpen={menuOpen}
                        toggle={() => toggleMenu()}
                        direction="up"
                        position="left"
                    >
                        <Link to="/contact">
                            <i
                                className="fa-solid fa-paper-plane"
                                onClick={() => toggleMenu()}
                            ></i>
                        </Link>
                        <button
                            onClick={() => {
                                toggleMenu();
                                toggleModal();
                            }}
                        >
                            <i className="fa-solid fa-phone"></i>
                        </button>
                        <Link
                            to={fbUrl}
                            target="_blank"
                            onClick={() => toggleMenu()}
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </Link>
                        <Link
                            to={linkedinUrl}
                            target="_blank"
                            onClick={() => toggleMenu()}
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </DropMenu>
                </div>
            )}
            <p className="footer-text">Mentions légales JusLoco®</p>
        </footer>
    );
}

export default Footer;
