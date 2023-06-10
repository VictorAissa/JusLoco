import { useState } from "react";
import "./index.scss";
import { useEffect } from "react";

function Form({ onMessage, onSuccess }) {
    const url = "http://localhost:8080/send";
    const [resMessage, setResMessage] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const userParams = {
            name: form.elements.nameField.value,
            email: form.elements.emailField.value,
            message: form.elements.messageField.value,
        };
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userParams),
            });
            const data = await response.json();
            console.log(data);
            setResMessage(data);
            form.reset();
        } catch (error) {
            setResMessage(error);
        }
    };

    useEffect(() => {
        if (resMessage) {
            console.log(resMessage);
            onMessage();
            if (resMessage.status === "success") {
                onSuccess(true);
            }
            if (resMessage.status === "fail") {
                onSuccess(false);
            }
        }
    }, [onMessage, onSuccess, resMessage]);

    return (
        <form className="contact-form_container" onSubmit={onSubmit}>
            <label htmlFor="nameField">Nom</label>
            <input type="text" placeholder="John Doe" id="nameField" />
            <label htmlFor="emailField">Email</label>
            <input
                type="text"
                placeholder="johndoe@jusloco.fr"
                id="emailField"
            />
            <label htmlFor="messageField">Message</label>
            <textarea
                placeholder="Salut Jordane, tu vas bien ?"
                id="messageField"
            ></textarea>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Form;
