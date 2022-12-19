import { BoxHome } from "./style";
import  R  from "../../assets/ele.svg";
import  S  from "../../assets/ela.svg";



export function Home(){

    return(
        <BoxHome className="home">
            <div className="boxText">
                <h1>
                    O Melhor Salão
                    De Beleza Que
                    Respeita A Sua 
                    Beleza
                </h1>
            </div>

            <div className="boxImage">
                <img className="prof" src={R}/>
                <img className="prof" src={S}/>
            </div>
        </BoxHome>
    )
} 