import React, { useEffect, useRef, useState } from "react";
import listaImagenes from "../datos/Imagenes.js";
import styles from "../estilos/Carrusel.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: () => ({
    y: 25,
    x: 10,
    opacity: 1,
    transition: {
      duration: 1.8,
    },
  }),
};

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className={styles.sliderContenedor}>
      <AnimatePresence>
        <motion.div
          className={styles.slider}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {listaImagenes.map((imagen, index) => (
            <motion.div
              custom={{ delay: (index + 1) * 0.15 }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              layoutId={imagen}
              className={styles.item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500, damping: 100 }}
            >
              <img src={imagen} alt={index} />
              <Link
                key={imagen.id}
                className={styles.linkSerie}
                to={`/list-serie/${index}`}
              >
                {index}.....TOUCH ME HARD
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Slider;
