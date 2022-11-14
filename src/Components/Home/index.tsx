import { BoxHome } from "./style";
import  Ele  from "../../assets/ele.svg";
import  Ela  from "../../assets/ela.svg";



export function Home(){

    return(
        <BoxHome>
            <div className="boxText">
                <h1>
                    O Melhor Salão
                    De Beleza Que
                    Respeita A Sua 
                    Beleza
                </h1>
            </div>

            <div className="boxImage">
                <img src={Ele}/>
                <img src={Ela}/>
            </div>
        </BoxHome>
    )
} 