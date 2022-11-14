import { BoxContact } from "./style";
import { Link, NavLink } from "react-router-dom";
import Zap from "../../assets/whatsapp.svg"
import Github from "../../assets/github.svg"
import Email from "../../assets/email.svg"
import Linkedin from "../../assets/linkedin.svg"


export function Contact() {
    return(
        <BoxContact>
            <ul>
                <a className="linkContact" href="https://web.whatsapp.com/send?phone=5521981055096" target="_blank">
                    <img className="icon" src={Zap} alt="whatsapp" />
                    <label htmlFor="whatsapp">Whatsapp</label>
                </a>
                <a className="linkContact" href="https://github.com/lucaslimadesouza" target="_blank">
                    <img className="icon" src={Github} alt="github" />
                    <label htmlFor="github">Github</label>
                </a>
                <a className="linkContact" href="mailto:lukxx23121996@gmail.com" target="_blank">
                    <img className="icon" src={Email} alt="email" />
                    <label htmlFor="email">Email</label>
                </a>
                <a className="linkContact" href="https://www.linkedin.com/in/lucas-lima-de-souza/" target="_blank">
                    <img className="icon" src={Linkedin} alt="linkedin" />
                    <label htmlFor="linkedin">Linkedin</label>
                </a>
            </ul>
        </BoxContact>
    )
}