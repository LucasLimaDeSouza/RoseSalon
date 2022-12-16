import { AboutBox } from "./style";
import SobreEla from "../../assets/about.svg"
import MidPhoto from "../../assets/salaoParallax.svg"
import { Footer } from "../Footer";



export function About() {
    return (
        <>
            <AboutBox>

                <div className="containerAbout">

                    <img className="imgAbout" src={SobreEla} alt="Foto de uma cabeleireira" />

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

                <div className="AboutimgCenter">
                    <img src={MidPhoto} className="imgCenter" alt="" />
                </div>

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

                    <img className="imgAbout" src={SobreEla} alt="Foto de uma cabeleireira" />

                </div>
            </AboutBox>
            <Footer/>
        </>
    )
}