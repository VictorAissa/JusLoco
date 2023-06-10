import portrait from "../../assets/portrait.avif";
import "./index.scss";

function About() {
    return (
        <section id="about">
            <img src={portrait} alt="Portrait de Jordane" />
            <div className="about_description">
                <h2>C'est moi Jordane, je suis un fou nanani</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque provident ab asperiores nulla odio quae nemo
                    consectetur, eveniet repudiandae velit, nisi molestias
                    dolores ea. Placeat a molestiae atque explicabo ex!
                </p>
            </div>
        </section>
    );
}

export default About;
