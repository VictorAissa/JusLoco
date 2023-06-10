import "./index.scss";
import "animate.css";

function Modal({ isOpen, toggle, title, description }) {
    return isOpen ? (
        <div className="modal_container">
            <div className="modal_overlay" onClick={toggle}>
                <div className="modal_content animate__animated animate__backInUp">
                    <h3>{title}</h3>
                    <div className="modal_description">{description}</div>
                    <button onClick={toggle}>X</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal;
