import { AboutBox } from "./style";
import { AboutParallax } from "./style";
import SobreEla from "../../assets/about.svg"
import Parallax from "../../assets/salaoParallax.svg"
import { Footer } from "../Footer";



export function About() {
    return (
        <>
            <AboutBox>

                <div className="containerAbout">

                    <img src={SobreEla} alt="Foto de uma cabeleireira" />

                    <div className="boxText">
                        <h3>Lorem ipsum</h3>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Soluta quo explicabo 
                            incidunt esse velit! Facilis culpa placeat 
                            cupiditate quam eos adipisci, hic mollitia sunt, 
                            voluptatum blanditiis, corporis quibusdam totam at.
                        </p>
                    </div>
                </div>

                <AboutParallax>
                    <img src={Parallax} className="imgParallax" alt="" />
                </AboutParallax>

                <div className="containerAbout">

                    <div className="boxText">
                    <h3>Lorem ipsum</h3>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Soluta quo explicabo 
                            incidunt esse velit! Facilis culpa placeat 
                            cupiditate quam eos adipisci, hic mollitia sunt, 
                            voluptatum blanditiis, corporis quibusdam totam at.
                        </p>
                    </div>

                    <img src={SobreEla} alt="Foto de uma cabeleireira" />

                </div>
            </AboutBox>
            <Footer/>
        </>
    )
}