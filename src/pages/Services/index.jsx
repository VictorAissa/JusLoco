import "./index.scss";
import Slider from "../../components/Slider";
import Service from "../../components/Service";
import img1 from "../../assets/pics/slider/samantha-gades-fIHozNWfcvs-unsplash.avif";
import img2 from "../../assets/pics/slider/globelet-reusable-Yv94hLcRgxo-unsplash.avif";
import img3 from "../../assets/pics/slider/jacob-bentzinger-hxfz-0g9w8-unsplash.avif";
import img4 from "../../assets/pics/slider/marvin-meyer-2sdjvx5jezq-unsplash.avif";
import img5 from "../../assets/pics/slider/marvin-meyer-ib5bld_weak-unsplash.avif";
import img6 from "../../assets/pics/slider/philipp-kpkipgg-gfe-unsplash.avif";
import img7 from "../../assets/pics/slider/marvin-meyer-ib5bld_weak-unsplash.avif";
import img8 from "../../assets/pics/jessy-smith-4xu6kse823E-unsplash.avif";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Services() {
    const images = [img1, img2, img3, img4, img5, img6];
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <section className="services_container">
            <Slider images={images} />
            <h1>Prestations</h1>
            <div className="service_wrapper">
                <Service
                    image={img7}
                    title="Service #1"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga cumque molestiae veritatis neque repellendus tenetur dolores assumenda! Minus sed obcaecati dolores itaque similique quos ratione explicabo distinctio debitis at."
                />
                <Service
                    image={img8}
                    title="Service #2"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga cumque molestiae veritatis neque repellendus tenetur dolores assumenda! Minus sed obcaecati dolores itaque similique quos ratione explicabo distinctio debitis at."
                />
            </div>
        </section>
    );
}

export default Services;
