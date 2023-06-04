import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
import Modal from "../Modal";
import logoFb from "../../assets/logos/logo_facebook.png";
import logoIg from "../../assets/logos/logo_instagram.png";
import logoMail from "../../assets/logos/logo_mail.png";
import logoPhone from "../../assets/logos/logo_smartphone.png";
import logoLinkedin from "../../assets/logos/logo_liknkedin.png";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const fbUrl =
        "https://www.facebook.com/people/Jordane-Kerne/100081277432162/?paipv=0&eav=Afa7wej6X2nkRaGazoEjoBkvcxLSyhExix_NRMUJAOoFCo7U7q3gQBYqWx0vkseO-n8&_rdr";
    const linkedinUrl =
        "https://www.linkedin.com/in/jordane-kerne-35482813/?originalSubdomain=fr";
    const mailAdress = "mailto:jordanekerne@jusloco.fr";

    const toggleModal = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    return (
        <footer className="footer_container">
            <Modal
                isOpen={isOpen}
                toggle={toggleModal}
                title={"Contact"}
                description={
                    <div className="centered-text-content">
                        Jordane Kerne <br />
                        06 06 06 06 06 <br />
                        jordanekerne@jusloco.fr
                    </div>
                }
            />
            <div className="social">
                <Link to={mailAdress} target="_blank">
                    {/* <img src={logoMail} alt="logo mail" /> */}
                    <i className="fa-solid fa-paper-plane"></i>
                </Link>
                <button onClick={toggleModal}>
                    {/* <img src={logoPhone} alt="logo téléphone" /> */}
                    <i className="fa-solid fa-phone"></i>
                </button>
                <Link to={fbUrl} target="_blank">
                    {/* <img src={logoFb} alt="logo facebook" /> */}
                    <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to={linkedinUrl} target="_blank">
                    {/* <img src={logoLinkedin} alt="logo LinkeIn" /> */}
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
            </div>
            <p className="footer-text">Mentions légales JusLoco®</p>
        </footer>
    );
}

export default Footer;
