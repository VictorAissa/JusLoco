import "./index.scss";

function Info({ image, title, description, reverse }) {
    const rowDirection = reverse && "reverse";
    const fade = reverse ? "fade-left" : "fade-right";
    return (
        <article
            data-aos={fade}
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
