import { Topo } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { FaBars } from "react-icons/fa"


export function Header() {
    const onClick = () => {
        alert("Click")
    }

    return(
        <Topo>
            <div className="boxHeader">

                <img className="logoImage" src={Logo} alt="logo" />

                <FaBars className="menuHamburgger" onClick={onClick}/>

                <nav>
                    <ul className="navPages">
                        <Link  className="linkPages" to="/">Boas Vindas</Link>
                        <Link  className="linkPages" to="/galeria">Cortes</Link>
                        <Link  className="linkPages" to="/sobre">Sobre Nós</Link>
                        <Link  className="linkPages" to="/contato">Contatos</Link>
                    </ul>
                </nav>
            </div>

        </Topo>

        
    )
}