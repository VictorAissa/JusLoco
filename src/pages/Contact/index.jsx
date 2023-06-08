import { useState } from "react";
import Form from "../../components/Form";
import "./index.scss";

function Contact() {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleMessage = () => {
        setSending(true);
    };

    const handleSuccess = (bool) => {
        setSuccess(bool);
    };

    return (
        <div className="contact_container">
            {sending ? (
                success ? (
                    <span className="contact_message">C'est parti !</span>
                ) : (
                    <span className="contact_message">
                        Aie, il y a eu un problème
                    </span>
                )
            ) : (
                <h1>Laissez moi votre message !</h1>
            )}

            <Form onMessage={handleMessage} onSuccess={handleSuccess} />
        </div>
    );
}

export default Contact;
