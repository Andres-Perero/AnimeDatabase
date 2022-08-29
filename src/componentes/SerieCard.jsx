import React from "react";
import { Link } from "react-router-dom";
import styles from "../estilos/Serie.module.css";

//Serie detalles
export const  SerieCard =({ title, image, id, url, moreInfo }) => {
  return (
    <div className={styles.gridItem}>
      <Link to={`/serie/${id}/${title}`} state={ moreInfo }>
        <img src={image} alt={title} />
        <div>{title}</div>
      </Link>
    </div>
  );
}

