import React, { useEffect, useRef, useState } from "react";
import ImagesJson from "../datos/Imagenes.js";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../estilos/Carrusel.module.css";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: () => ({
    y: 10,
    x: 10,
    opacity: 1,
    transition: {
      duration: 1,
    },
  }),
};

export const Slider = () => {
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
          {ImagesJson.map((imagen, index) => (
            <motion.div
              key={index}
              custom={{ delay: (index + 1) * 0.15 }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              layoutId={imagen}
              className={styles.item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 100 }}
            >
              <img src={imagen} alt={index} />
              <Link
                className={styles.linkSerie}
                to={`/serie/${index}/${imagen}`}
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
