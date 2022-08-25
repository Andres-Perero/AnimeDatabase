import React from "react";
import styles from "../estilos/MovieCard.module.css";

//Serie detalles
function SerieCard({ title, image, id, url }) {
  return (
    <div className={styles.gridItem}>
      <a key={id} href={url}>
        <img  src={image} alt={title} />
        <div >{title}</div>
      </a>
    </div>
  );
}

export default SerieCard;
