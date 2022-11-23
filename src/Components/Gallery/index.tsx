import { BoxGallery } from "./style";
import  Photos from "../../assets/galeria.svg"
import { Footer } from "../Footer";



export function Gallery() {
    return(
        <>
            <BoxGallery>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                <div className="contentPhoto">
                    <img src={Photos} alt="" />
                    <p>50 R$</p>
                </div>
                
            </BoxGallery>
            <Footer/>
        </>
    )
}