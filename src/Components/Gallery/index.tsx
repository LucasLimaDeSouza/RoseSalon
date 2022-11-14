import { BoxGallery } from "./style";
import  Photos from "../../assets/galeria.svg"
import { Footer } from "../Footer";



export function Gallery() {
    return(
        <>
            <BoxGallery>
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
                <img src={Photos} alt="" />
            </BoxGallery>
            <Footer/>
        </>
    )
}