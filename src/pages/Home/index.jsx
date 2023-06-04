import "./index.scss";
import logo from "../../assets/logo-jus-loco-980x239.png";
import cover from "../../assets/cover-02.png";
import img1 from "../../assets/pics/alex-lvrs--ZvC04d-xLw-unsplash.jpg";
import img2 from "../../assets/pics/alina-karpenko-jH1PBHevj38-unsplash.jpg";
import img3 from "../../assets/pics/nathan-dumlao-dH67nSuFkv8-unsplash.jpg";
import img4 from "../../assets/pics/pablo-de-la-fuente-aD3i5aWJUKM-unsplash.jpg";
import Info from "../../components/Info";
import About from "../../components/About";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    let location = useLocation();

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
        <>
            <section className="hero">
                <img src={cover} alt="Bouteilles de jus" />
                <div className="hero-content">
                    <img src={logo} alt="Logo JusLoco" />
                </div>
            </section>
            <section className="info_container">
                <Info
                    image={img1}
                    title={"Lorem Ipsum"}
                    description={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae fugit ratione sunt illo blanditiis dolorem ipsam, nihil, aliquam dolores aliquid asperiores accusantium deleniti reprehenderit totam quam sit delectus officia."
                    }
                />
                <Info
                    image={img2}
                    title={"Lorem Ipsum"}
                    description={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae fugit ratione sunt illo blanditiis dolorem ipsam, nihil, aliquam dolores aliquid asperiores accusantium deleniti reprehenderit totam quam sit delectus officia."
                    }
                    reverse
                />
                <Info
                    image={img3}
                    title={"Lorem Ipsum"}
                    description={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae fugit ratione sunt illo blanditiis dolorem ipsam, nihil, aliquam dolores aliquid asperiores accusantium deleniti reprehenderit totam quam sit delectus officia."
                    }
                />
                <Info
                    image={img4}
                    title={"Lorem Ipsum"}
                    description={
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae fugit ratione sunt illo blanditiis dolorem ipsam, nihil, aliquam dolores aliquid asperiores accusantium deleniti reprehenderit totam quam sit delectus officia."
                    }
                    reverse
                />
            </section>
            <About className="smooth-scroll-link" />
        </>
    );
}

export default Home;
