import { useEffect, useState } from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";
import "./index.scss";

function Slider(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const pictures = props.images;
    const totalSlides = pictures?.length;

    const previousSlide = () =>
        setCurrentSlide(
            currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
        );
    const nextSlide = () =>
        setCurrentSlide(
            currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
        );

    useEffect(() => {
        setTimeout(() => {
            nextSlide();
        }, 5000);
    });

    return (
        // Mise en place de l'ensemble des images en ligne (grid) dans le container du slider
        <div
            className="slider_container"
            style={{ gridTemplate: `100% / repeat(${totalSlides}, 100%)` }}
        >
            {pictures?.map((picture, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                    key={`photo ${index}`}
                    src={picture}
                    alt={`photo ${index}`}
                    // Translation des images de la valeur de leur largeur * la valeur de la slide courante
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                />
            ))}

            {/* Création des éléments de navigation entre les slides si le slider comprend plus d'une image */}
            {totalSlides > 1 && (
                <nav>
                    <img
                        className="arrow"
                        src={arrowLeft}
                        alt="Flèche gauche"
                        onClick={() => {
                            previousSlide();
                        }}
                    />
                    <span className="numbering_container">
                        {currentSlide + 1}/{totalSlides}
                    </span>
                    <img
                        className="arrow"
                        src={arrowRight}
                        alt="Flèche droite"
                        onClick={() => {
                            nextSlide();
                        }}
                    />
                </nav>
            )}
        </div>
    );
}
export default Slider;
