import { Topo } from "./style";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"


export function Header() {
    return(
        <Topo>
            <div className="boxHeader">
                <img className="logoImage" src={Logo} alt="logo" />
                <nav>
                    <ul>
                        <Link  className="linkPages" to="/">Boas Vindas</Link>
                        <Link  className="linkPages" to="/galeria">Galeria</Link>
                        <Link  className="linkPages" to="/sobre">Sobre Nós</Link>
                        <Link  className="linkPages" to="/contato">Contatos</Link>
                    </ul>
                </nav>
            </div>

            {/* <li className="linkPages"></li>
                        <li className="linkPages"></li>
                        <li className="linkPages"></li>
                        <li className="linkPages">Sobre Nós</li> */}


        </Topo>

        
    )
}