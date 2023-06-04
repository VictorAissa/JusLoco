import { Link } from "react-router-dom";
import "./index.scss";

function Error() {
    return (
        <div className="error_container">
            <p className="error_code">404</p>
            <div className="error_text-wrapper">
                <p className="error_comment">
                    La page que vous demandez n'existe pas !
                </p>
                <Link to="/" className="error_link">
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </div>
    );
}

export default Error;
