import { Topo} from "./style";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"
import { useEffect, useState } from "react";


export function Header() {

    const [isActive, setIsActive] = useState(false) 

    const onClick = () => {
        setIsActive(!isActive )
    }
    const loadPage = () => {
        return onClick()
    }

    useEffect(() => {

        document.body.style.overflowY = isActive ? "hidden" : "auto";
        
    }, [isActive])

    return(
        <>
        
            <Topo>
                <div className="boxHeader">

                    
                    <Link  className="linkPages" to="/"><img className="logoImage" src={Logo} alt="logo" /></Link>

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
                <nav 
                    className ={`menu ${isActive ? "active" : "inactive"}`}
                >
                 
                    <ul className="navModalPages">

                        <FaTimes className="closeModal"
                            onClick={onClick}
                        />
  
                        <Link  className="contentLinkPages" to="/" onClick={loadPage}>
                            <b className="linkPages">
                                Boas Vindas
                            </b>
                        </Link>
                        <Link  className="contentLinkPages" to="/galeria" onClick={loadPage}>
                            <b className="linkPages">
                                Cortes
                            </b>
                        </Link>
                        <Link  className="contentLinkPages" to="/sobre" onClick={loadPage}>
                            <b className="linkPages">
                                Sobre Nós
                            </b>
                        </Link>
                        <Link  className="contentLinkPages" to="/contato" onClick={loadPage}>
                            <b className="linkPages">
                                Contatos
                            </b>
                        </Link>

                    </ul>
                </nav>
            </Topo>
        </>

        
    )
}