import { BoxHome } from "./style";
import  Ele  from "../../assets/ele.svg";
import  Ela  from "../../assets/ela.svg";



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
                <img className="prof" src={Ele}/>
                <img className="prof" src={Ela}/>
            </div>
        </BoxHome>
    )
} 