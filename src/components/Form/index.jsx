import { useState } from "react";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.scss";

function Form({ onMessage, onSuccess }) {
    const form = useRef();
    const [resMessage, setResMessage] = useState(null);
    // const url = "http://localhost:8080/send";

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     const userParams = {
    //         name: form.elements.nameField.value,
    //         email: form.elements.emailField.value,
    //         message: form.elements.messageField.value,
    //     };
    //     try {
    //         const response = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //             body: JSON.stringify(userParams),
    //         });
    //         const data = await response.json();
    //         console.log(data);
    //         setResMessage(data);
    //         form.reset();
    //     } catch (error) {
    //         setResMessage(error);
    //     }
    // };
    // const userParams = {
    //     userName: form.elements.nameField.value,
    // };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ijcr42k",
                "template_zc0rpae",
                form.current,
                "qiAyQSWc4yRGXZUzJ"
            )
            .then(
                (result) => {
                    setResMessage(result.text);
                },
                (error) => {
                    setResMessage(error.text);
                }
            );
        form.current[0].value = "";
        form.current[1].value = "";
        form.current[2].value = "";
    };

    useEffect(() => {
        if (resMessage) {
            console.log(resMessage);
            onMessage();
            if (resMessage === "OK") {
                onSuccess(true);
            } else {
                onSuccess(false);
            }
        }
    }, [onMessage, onSuccess, resMessage]);

    return (
        <form
            className="contact-form_container"
            // onSubmit={onSubmit}
            ref={form}
            onSubmit={sendEmail}
        >
            <label htmlFor="nameField">Nom</label>
            <input
                type="text"
                placeholder="John Doe"
                id="nameField"
                name="user_name"
            />
            <label htmlFor="emailField">Email</label>
            <input
                type="text"
                placeholder="johndoe@jusloco.fr"
                id="emailField"
                name="user_email"
            />
            <label htmlFor="messageField">Message</label>
            <textarea
                placeholder="Salut Jordane, tu vas bien ?"
                id="messageField"
                name="message"
            ></textarea>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Form;
