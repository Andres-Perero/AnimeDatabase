import Carousel from "framer-motion-carousel"
import listaImagenes from "../datos/Imagenes.js";

const Carrusel2 = () => (
    <>
        <h2 style={{ textAlign: "center" }}>images carousel</h2>
        <div style={{ width: 600, height: 400, margin: "0 auto" }}>
            <Carousel>
                {listaImagenes.map((item, i) => (
                    <img
                        draggable="false"
                        src={item}
                        key={i}
                        width="100%"
                        alt=""
                    />
                ))}
            </Carousel>
        </div>
    </>
)
export default Carrusel2