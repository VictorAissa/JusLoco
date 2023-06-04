import "./index.scss";

function Service({ image, title, description }) {
    return (
        <article className="service">
            <img src={image} alt="" />
            <div className="service_text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default Service;
