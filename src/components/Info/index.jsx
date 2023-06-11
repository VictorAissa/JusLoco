import { useState } from "react";
import "./index.scss";

function Info({ image, title, description, reverse }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const rowDirection = reverse && "reverse";
    const fade = reverse ? "fade-left" : "fade-right";
    const desktopResolution = windowWidth > 720;

    return (
        <article
            data-aos={desktopResolution ? fade : "flip-left"}
            data-aos-duration="1000"
            className={`info ${rowDirection}`}
        >
            <div className="img-wrapper">
                <img src={image} alt="" />
            </div>
            <div className="info_description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default Info;
