import "./index.scss";
import Slider from "../../components/Slider";
import Service from "../../components/Service";
import img1 from "../../assets/pics/alex-lvrs--ZvC04d-xLw-unsplash.jpg";
import img2 from "../../assets/pics/alina-karpenko-jH1PBHevj38-unsplash.jpg";
import img3 from "../../assets/pics/nathan-dumlao-dH67nSuFkv8-unsplash.jpg";
import img4 from "../../assets/pics/pablo-de-la-fuente-aD3i5aWJUKM-unsplash.jpg";

function Services() {
    const images = [img1, img2, img3, img4];
    return (
        <section className="services_container">
            <h1>Prestations</h1>
            <Slider images={images} />
            <div className="service_wrapper">
                <Service
                    image={img2}
                    title="Service #1"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga cumque molestiae veritatis neque repellendus tenetur dolores assumenda! Minus sed obcaecati dolores itaque similique quos ratione explicabo distinctio debitis at."
                />
                <Service
                    image={img4}
                    title="Service #2"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga cumque molestiae veritatis neque repellendus tenetur dolores assumenda! Minus sed obcaecati dolores itaque similique quos ratione explicabo distinctio debitis at."
                />
            </div>
        </section>
    );
}

export default Services;
